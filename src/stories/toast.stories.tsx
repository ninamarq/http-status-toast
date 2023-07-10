import { Meta, StoryObj } from '@storybook/react';
import App from '../../test/example/src/App.js'

const meta: Meta<typeof App> = {
	component: App,
};

export default meta;
type Story = StoryObj<typeof App>;

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
	args: {
		status: '204',
		position: 'right',
		duration: '5000',
		message: '',
		lang: 'pt',
		customStyle: {}
	},
};
