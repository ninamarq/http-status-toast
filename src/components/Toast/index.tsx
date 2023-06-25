import React, { useMemo, useState } from 'react';
import ToastStyle from './styles';
import { getThemeByStatusCode } from '../../utils';
import { TTheme } from '../../types';

interface IToastProps {
	status: string | number
}

export const Toast = (props: IToastProps) => {
	const [toastTheme, setToastTheme] = useState<TTheme>('success');

	useMemo(() => {
		setToastTheme(getThemeByStatusCode(props.status));
	}, [props.status]);

	return (
		<ToastStyle theme={toastTheme}>
			opaaaaaaaaaaaa
		</ToastStyle>
	);
};
