import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BiSolidErrorAlt } from 'react-icons/bi';
import { LuServerOff } from 'react-icons/lu';
import { MdSmsFailed } from 'react-icons/md';
import { EStatusTheme, TLang } from '../types';
import { styled } from 'styled-components';
import getToastTitleByTheme from './getToastTitleByTheme.util';

const getThemeIcon = (theme: EStatusTheme, lang?: TLang) => {
	const themeIcons = {
		success: <AiFillCheckCircle />,
		client_error: <BiSolidErrorAlt />,
		server_error: <LuServerOff />,
		unknown: <MdSmsFailed />
	};

	const ThemeIconContainer = styled.div`
		display: flex;
		gap: 16px;
		justify-content: flex-start;
		align-items: center;
	`;

	return (
		<ThemeIconContainer>
			{themeIcons[theme]}
			{getToastTitleByTheme(theme, lang)}
		</ThemeIconContainer>
	);
};

export default getThemeIcon;
