import React, { useMemo, useState } from 'react';
import { styles as s } from './styles';
import { getThemeByStatusCode } from '../../utils';
import { EStatusTheme } from '../../types';
import { IoClose } from 'react-icons/io5';

interface IToastProps {
	status: string | number
	position?: 'right' | 'left'
	duration?: string | number
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
		<s.ToastContainer theme={toastTheme} position={props.position || 'right'} display={displayToast}>
			<s.CloseButton>
				<IoClose onClick={() => setDisplayToast(false)}/>
			</s.CloseButton>
			opaaaaaaaaaaaa
			opaaaaaaaaaaaa
			opaaaaaaaaaaaa
			opaaaaaaaaaaaa
			opaaaaaaaaaaaa
			opaaaaaaaaaaaa
		</s.ToastContainer>
	);
};
