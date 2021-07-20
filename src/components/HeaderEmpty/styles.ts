import styled from 'styled-components';

export const Container = styled.div`
  grid-area: HE;
  background-color: var(--tertiary);
  -webkit-app-region: drag;

  @media (max-width: 980px) {
    display: none;
  }
`;
