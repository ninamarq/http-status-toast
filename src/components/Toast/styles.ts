import { styled } from 'styled-components';

export interface IThemeProps {
  theme: TTheme
}

export type TTheme = 'success' | 'client_error' | 'server_error'

const ToastStyle = styled.div<IThemeProps>`
  display: flex;
  flex-direction: column;
  color: 'red';
  width: 500px;
  height: 200px;
  background: ${props => ToastStyle.defaultProps.theme[props.theme]};
  border: 1px solid ${props => ToastStyle.defaultProps.theme[props.theme]};
`;

ToastStyle.defaultProps = {
	theme: {
		success: '#7FB069',
		client_error: '#FF3C38',
		server_error: '#FF8C42',
	}
};

export default ToastStyle;