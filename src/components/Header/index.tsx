import React, { useCallback } from 'react';
import { getThemeIcon } from '../../utils';
import { EStatusTheme, TLang } from '../../types';
import { AiOutlineClose } from 'react-icons/ai';
import './index.css'

interface IHeaderProps {
	currentTheme: EStatusTheme
  currentLang: TLang
  handleDisplayToast: (value: string) => void
	currentHeader?: string | React.ReactNode
}

export const Header = (props: IHeaderProps) => {
	const handleHeader = useCallback(() => {
		if (props.currentHeader) {
			return props.currentHeader
		}

		return (
			<>
				{getThemeIcon(props.currentTheme, props.currentLang)}
				<div className='close-button'>
					<AiOutlineClose onClick={() => props.handleDisplayToast("false")}/>
				</div>
			</>
		);
	}, [props.currentHeader, props.currentLang, props.currentTheme])
	
	return (
		<header className='header'>
			{handleHeader()}
		</header>
	);
};
