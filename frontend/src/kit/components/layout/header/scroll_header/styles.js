import styled, { keyframes } from 'styled-components';

const fall_down = keyframes`
  from {
    transform: translateY(-100%);
  }

  to {
    transform: translateY(0%);
  }
`;

export const StyledHeader = styled.div`
  display: ${(props) => (props.show === true ? 'flex' : 'none')};
  position: sticky;
  top: 0;
  transition: 0.5s;
  opacity: 1 !important;
  z-index: 2;
  animation: ${fall_down} 0.3s linear;

  @media (max-width: 425px) {
    display: none !important;
  }
`;
