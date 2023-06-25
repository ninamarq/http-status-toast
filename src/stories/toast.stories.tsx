import { Meta, StoryObj } from '@storybook/react';

import { Toast } from '../components';

const meta: Meta<typeof Toast> = {
	component: Toast,
};

export default meta;
type Story = StoryObj<typeof Toast>;

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
	args: {
		primary: true,
	},
};