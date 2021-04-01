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
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  transition: 0.5s;
  opacity: 1 !important;
  z-index: 2;
  transform: translateY(0%);
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  /* animation: ${fall_down} 0.3s linear; */

`;

