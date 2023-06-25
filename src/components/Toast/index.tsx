import React, { useMemo, useState } from 'react';
import ToastStyle, { TTheme } from './styles';

interface IToastProps {
	status: string | number
}

export const Toast = (props: IToastProps) => {
	const [toastTheme, setToastTheme] = useState<TTheme>('success');

	// useMemo(() => {
	// 	setToastTheme(props.status);
	// }, [props.status]);

	return (
		<ToastStyle theme={toastTheme}>
				Olaaaaaa
			{JSON.stringify(props.status)}
			{JSON.stringify(ToastStyle.defaultProps)}
		</ToastStyle>
	);
};
