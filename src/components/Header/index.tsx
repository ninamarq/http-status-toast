import React from 'react';
import { styles as s } from './styles';
import { getThemeIcon } from '../../utils';
import { EStatusTheme, TLang } from '../../types';
import { IoClose } from 'react-icons/io5';

interface IHeaderProps {
	currentTheme: EStatusTheme
  currentLang: TLang
  handleDisplayToast: (value: boolean) => void
}

export const Header = (props: IHeaderProps) => {
	return (
		<s.ToastHeader>
			{getThemeIcon(props.currentTheme, props.currentLang)}
			<s.CloseButton>
				<IoClose onClick={() => props.handleDisplayToast(false)}/>
			</s.CloseButton>
		</s.ToastHeader>
	);
};
