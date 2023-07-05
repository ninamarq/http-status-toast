import React, { useCallback } from 'react';
import { styles as s } from './styles';
import { getMessagesByTheme } from '../../utils';
import { EStatusTheme, TLang } from '../../types';

interface IToastMessageProps {
  currentMessage?: string
  currentTheme: EStatusTheme
  currentLang: TLang
}

export const ToastMessage = (props: IToastMessageProps) => {
	const messageToRender = useCallback(() => {
		if(props.currentMessage) {
			return props.currentMessage;
		}

		return getMessagesByTheme(props.currentTheme, props.currentLang);
	}, [props.currentTheme, props.currentMessage, props.currentLang]);

	return (
		<s.MessageContainer>
			{messageToRender()}
		</s.MessageContainer>
	);
};
