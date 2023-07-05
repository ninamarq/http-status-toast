import React, { useCallback, useMemo, useState } from 'react';
import { styles as s } from './styles';
import { getThemeByStatusCode, getThemeIcon, getMessagesByTheme } from '../../utils';
import { EStatusTheme, TLang } from '../../types';
import { IoClose } from 'react-icons/io5';

interface IToastProps {
	status: string | number
	lang: TLang
	position?: 'right' | 'left'
	duration?: string | number
	message?: string
}

export const Toast = (props: IToastProps) => {
	const [toastTheme, setToastTheme] = useState<EStatusTheme>(EStatusTheme.SUCCESS);
	const [displayToast, setDisplayToast] = useState<boolean>(true);

	const messageToRender = useCallback(() => {
		if(props.message) {
			return props.message;
		}

		return getMessagesByTheme(toastTheme, props.lang);
	}, [toastTheme, props.message, props.lang]);

	useMemo(() => {
		setToastTheme(getThemeByStatusCode(props.status));
	}, [props.status]);

	setTimeout(() => {
		setDisplayToast(false);
	}, Number(props.duration) || 7000);

	return (
		<s.ToastContainer theme={toastTheme} position={props.position || 'right'} display={displayToast}>
			<s.ToastHeader>
				{getThemeIcon(toastTheme, props.lang)}
				<s.CloseButton>
					<IoClose onClick={() => setDisplayToast(false)}/>
				</s.CloseButton>
			</s.ToastHeader>
			<s.MessageContainer>
				{messageToRender()}
			</s.MessageContainer>
		</s.ToastContainer>
	);
};
