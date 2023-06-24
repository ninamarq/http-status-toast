import { Meta } from '@storybook/react';
import { Toast } from '../components';
import React from 'react';

export default {
	title: 'Toast testing',
	component: Toast,
} as Meta;

export const Default = () => <Toast />;
