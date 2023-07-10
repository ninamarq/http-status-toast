import React from 'react';
import { getThemeIcon } from '../../utils';
import { EStatusTheme, TLang } from '../../types';
import { AiOutlineClose } from 'react-icons/ai';
import './index.css'

interface IHeaderProps {
	currentTheme: EStatusTheme
  currentLang: TLang
  handleDisplayToast: (value: string) => void
}

export const Header = (props: IHeaderProps) => {
	return (
		<header className='header'>
			{getThemeIcon(props.currentTheme, props.currentLang)}
			<div className='close-button'>
				<AiOutlineClose onClick={() => props.handleDisplayToast("false")}/>
			</div>
		</header>
	);
};
