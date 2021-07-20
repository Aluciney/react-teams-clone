import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends ButtonHTMLAttributes<HTMLElement> {
  isClose?: boolean;
}

export const Container = styled.div`
  grid-area: HA;
  background-color: var(--tertiary);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  -webkit-app-region: drag;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; 
  justify-content: start;
  height: calc(100% - 16px);
  background-color: var(--primary);
  border-radius: 3px;
  width: 100%;
  max-width: 1050px;
  padding: 0 9px;
  margin-right: 105px;

  @media (max-width: 980px) {
    margin-left: 20px;
    margin-right: 15px;
  }

  svg {
    color: #8c8c8c;
    font-size: 18px;
    margin-top: 2px;
    margin-right: 5px;
  }
`;

export const WindowsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

export const WindowsButton = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 45px;
  height: 100%;
  -webkit-app-region: no-drag;
  svg {
    color: #FFF;
    font-size: 19px;
  }
  &:hover {
    background-color: ${props => props.isClose ? '#c13434' : 'var(--quaternary)'};
  }
`;

export const EllipsisButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 45px;
  height: 100%;
  -webkit-app-region: no-drag;
  svg {
    color: #c7c7c7;
    font-size: 19px;
  }
  &:hover svg {
    color: #FFF;
  }
`;

export const TextInput = styled.input`
  background: none; 
  border: 0;
  color: #FFF;
  font-size: 14px;
  width: 100%;
  -webkit-app-region: no-drag;
  ::placeholder {
    color: #8c8c8c;
  }
  :focus {
    outline: 0px;
  }
  :hover:not(:focus) {
    ::placeholder {
      color: #c7c7c7;
    }
  }
`;
