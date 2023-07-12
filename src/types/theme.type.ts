export interface IThemeProps {
  theme: { [key: string]: string } | TTheme;
}

export type TTheme = "success" | "client_error" | "server_error";
