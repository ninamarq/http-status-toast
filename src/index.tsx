import React from 'react';
import { IToastProps, Toast } from './components/Toast';
import * as components from './components';

export { components };

const httpStatusToast = (props: IToastProps) => {
	return <Toast {...props} />;
};

export default httpStatusToast;
