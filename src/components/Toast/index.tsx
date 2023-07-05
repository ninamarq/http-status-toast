import React, { useMemo, useState } from 'react';
import { styles as s } from './styles';
import { getThemeByStatusCode } from '../../utils';
import { EStatusTheme, TLang } from '../../types';
import { Header } from '../Header';
import { ToastMessage } from '../ToastMessage';

interface IToastProps {
	status: string | number
	lang: TLang
	position?: 'right' | 'left'
	duration?: string | number
	message?: string
	customStyle?: React.CSSProperties
}

export const Toast = (props: IToastProps) => {
	const [toastTheme, setToastTheme] = useState<EStatusTheme>(EStatusTheme.SUCCESS);
	const [displayToast, setDisplayToast] = useState<boolean>(true);

	useMemo(() => {
		setToastTheme(getThemeByStatusCode(props.status));
	}, [props.status]);

	setTimeout(() => {
		setDisplayToast(false);
	}, Number(props.duration) || 7000);

	return (
		<s.ToastContainer
			theme={toastTheme}
			position={props.position || 'right'}
			display={displayToast}
			style={props.customStyle}
		>
			<Header
				currentTheme={toastTheme}
				currentLang={props.lang}
				handleDisplayToast={setDisplayToast}
			/>
			<ToastMessage
				currentMessage={props.message}
				currentTheme={toastTheme}
				currentLang={props.lang}
			/>
		</s.ToastContainer>
	);
};
