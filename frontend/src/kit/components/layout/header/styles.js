import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: auto;
  background-color: #ccc;
  background-image: ${(props) => `url(${props.bg_img})`};
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
`;

export const Backdrop = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  backdrop-filter: grayscale(0.3) contrast(0.9) brightness(0.6);
`;
