import { styled, css } from 'styled-components';
import { IThemeProps } from '../../types';
import { Interpolation, RuleSet } from 'styled-components/dist/types';

interface IToastProps extends IThemeProps {
  position: 'right' | 'left'
  display: boolean
  style?: Interpolation<object>
}

const PropsStyle = (style: Interpolation<object>): RuleSet<object> => css`
  ${style}
`;

const ToastContainer = styled.div<IToastProps>`
  display: ${(props) => props.display ? 'flex' : 'none'};
  box-sizing: border-box;
  background: ${props => ToastContainer.defaultProps.theme[props.theme]};
  border-radius: 6px;
  flex-direction: column;
  color: #F0EFFB;
  padding: 8px;
  z-index: 3;
  -webkit-transform: translate3d(0, 0, 3);
  position: fixed;
  top: 5%;
  right: ${props => props.position === 'right' && '3.5%'};
  left: ${props => props.position === 'left' && '3.5%'};
  width: 30%;
  min-width: 150px;
  max-width: 500px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  ${(props) => PropsStyle(props.style) as unknown as string};
`;

ToastContainer.defaultProps = {
	theme: {
		success: '#7FB069',
		client_error: '#FF3C38',
		server_error: '#FF8C42',
		unknown: '#76949F'
	}
};

export const styles = { ToastContainer };
