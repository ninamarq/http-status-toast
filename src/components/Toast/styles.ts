import { styled } from 'styled-components';
import { IThemeProps } from '../../types';

interface IToastProps extends IThemeProps {
  position: 'right' | 'left'
  display: boolean
}

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
  right: ${props => props.position === 'right' && '5%'};
  left: ${props => props.position === 'left' && '5%'};
  width: 30%;
  min-width: 150px;
  max-width: 500px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

const ToastHeader = styled.header`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  cursor: default
`;

const CloseButton = styled.div`
  cursor: pointer;
  &:hover {
    transition: .5s;
    opacity: 70%;
  };
`;

const MessageContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  box-sizing: border-box;
  padding: 12px 4px;

`;

ToastContainer.defaultProps = {
	theme: {
		success: '#7FB069',
		client_error: '#FF3C38',
		server_error: '#FF8C42',
	}
};

export const styles = { ToastContainer, CloseButton, MessageContainer, ToastHeader };
