import React from 'react';
export { Toast } from './Toast';
import { IToastProps, Toast } from './Toast';

const httpStatusToast = (props: IToastProps) => {
	return <Toast {...props} />;
};

export default httpStatusToast;
