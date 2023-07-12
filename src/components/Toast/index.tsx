import React, { useMemo, useState } from 'react';
import './index.css';
import { getThemeByStatusCode } from '../../utils';
import { EStatusTheme, TLang } from '../../types';
import { Header } from '../Header';
import { ToastMessage } from '../ToastMessage';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom'

export interface IToastProps {
	status: string | number
	lang: TLang
	position?: 'right' | 'left'
	duration?: string | number
	message?: string | React.ReactNode
	customHeader?: string | React.ReactNode
	customStyle?: React.CSSProperties
}

export const Toast = (props: IToastProps) => {
	const ToastComponent = (props: IToastProps) => {
			const [toastTheme, setToastTheme] = useState<EStatusTheme>(EStatusTheme.SUCCESS);
			const [displayToast, setDisplayToast] = useState<string>("true");

			useMemo(() => {
				setToastTheme(getThemeByStatusCode(props.status));
			}, [props.status]);

			setTimeout(() => {
				setDisplayToast("false");
			}, Number(props.duration) || 7000);

			const handleClassName = () => {
				const styleArr = ["toast_container"]
				styleArr.push(`bg_${toastTheme}`)

				if (displayToast === "false") styleArr.push("hide_toast")

				return styleArr.join(" ")
			}

			return (
				<div className={handleClassName()} id={props.position ?? "right"} style={props.customStyle}>
					<Header
						currentTheme={toastTheme}
						currentLang={props.lang}
						currentHeader={props.customHeader}
						handleDisplayToast={setDisplayToast}
					/>
					<ToastMessage
						currentMessage={props.message}
						currentTheme={toastTheme}
						currentLang={props.lang}
					/>
					<div
						className="timer active"
						style={{
							animation: `timer linear ${props.duration || 7000}ms forwards`,
						}}
					></div>
				</div>
			)
	}

	let domNode;
  const toastNotify = document.getElementById('@ninamarq/http-status-toast');

	const handleRoot = (node: Element | DocumentFragment) => {
		const internalRoot = (ReactDOM as any)._internalRoot;

		if (internalRoot && internalRoot.current) {
			internalRoot.current.render(<ToastComponent {...props} />);
		} else {
			const root = createRoot(node);
			root.render(<ToastComponent {...props} />);
		}
	};	

  if (toastNotify) {
    domNode = document.querySelector('body')?.appendChild(toastNotify);
  } else {
    const divInjet = document.createElement('div');
    divInjet.setAttribute('id', '@ninamarq/http-status-toast');

    domNode = document.querySelector('body')?.appendChild(divInjet);
  }

  if (domNode) {
    handleRoot(domNode);
		return;
  }

  console.warn("Error in http-status-toast render, please notify Marina at this link: https://github.com/ninamarq/http-status-toast/issues");
};