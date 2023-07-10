import { defineConfig } from "tsup";
import pkg from "./package.json";

const dependencies = Object.keys(pkg.dependencies);
const peerDependencies = Object.keys(pkg.peerDependencies);

export default defineConfig({
  clean: true,
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  treeshake: true,
  minify: true,
  bundle: true,
  dts: true,
  tsconfig: "tsconfig.json",
  splitting: !true,
  sourcemap: !true,
  noExternal: dependencies,
  external: peerDependencies,
  injectStyle: true,
  esbuildOptions(options) {
    options.define = {
      "process.env.NODE_ENV": JSON.stringify("production"),
    };
    options.banner = {
      js: '"use client"',
    };
  },
  async onSuccess() {
    console.log("Build success");
  },
  esbuildPlugins: [
    {
      name: "css-module",
      setup(build) {
        build.onResolve(
          { filter: /\.module\.css$/, namespace: "file" },
          (args) => ({
            path: `${args.path}#css-module`,
            namespace: "css-module",
            pluginData: {
              pathDir: path.join(args.resolveDir, args.path),
            },
          })
        );
        build.onLoad(
          { filter: /#css-module$/, namespace: "css-module" },
          async (args) => {
            const { pluginData } = args;
            const source = await fsPromises.readFile(
              pluginData.pathDir,
              "utf8"
            );

            let cssModule = {};
            const result = await postcss([
              postcssModules({
                getJSON(_, json) {
                  cssModule = json;
                },
              }),
            ]).process(source, { from: pluginData.pathDir });

            return {
              pluginData: { css: result.css },
              contents: `import "${
                pluginData.pathDir
              }"; export default ${JSON.stringify(cssModule)}`,
            };
          }
        );
        build.onResolve(
          { filter: /\.module\.css$/, namespace: "css-module" },
          (args) => ({
            path: path.join(args.resolveDir, args.path, "#css-module-data"),
            namespace: "css-module",
            pluginData: args.pluginData,
          })
        );
        build.onLoad(
          { filter: /#css-module-data$/, namespace: "css-module" },
          (args) => ({
            contents: args.pluginData.css,
            loader: "css",
          })
        );
      },
    },
  ],
  target: ["es6", "esnext", "node14"],
});
