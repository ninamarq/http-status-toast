import { styled } from 'styled-components';

const ToastHeader = styled.header`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  cursor: default;
`;

const CloseButton = styled.div`
  cursor: pointer;
  &:hover {
    transition: .5s;
    opacity: 70%;
  };
`;

export const styles = { CloseButton, ToastHeader };
