import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BiSolidErrorAlt } from 'react-icons/bi';
import { LuServerOff } from 'react-icons/lu';
import { TTheme } from '../types';
import { styled } from 'styled-components';

const getThemeIcon = (theme: TTheme) => {
	const themeIcons = {
		success: <AiFillCheckCircle />,
		client_error: <BiSolidErrorAlt />,
		server_error: <LuServerOff />,    
	};

	const ThemeIconContainer = styled.div`
		display: flex;
		gap: 16px;
		justify-content: flex-start;
		align-items: center
	`;

	return (
		<ThemeIconContainer>
			{themeIcons[theme]}
			{theme}
		</ThemeIconContainer>
	);
};

export default getThemeIcon;
