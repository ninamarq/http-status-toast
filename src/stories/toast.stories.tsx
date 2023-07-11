import { Meta, StoryObj } from '@storybook/react';
// import App from '../../test/example/src/App.js'
import { httpStatusToast } from '../../src';

const meta: Meta<typeof httpStatusToast> = {
	component: httpStatusToast,
};

export default meta;
type Story = StoryObj<typeof httpStatusToast>;

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
	args: {
		status: '204',
		position: 'right',
		duration: '5000',
		message: {},
		lang: 'pt',
		customStyle: {},
		customHeader: {}
	},
};
