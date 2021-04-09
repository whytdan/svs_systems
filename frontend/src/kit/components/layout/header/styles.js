import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: auto;
  position: relative;
  background-image: ${(props) => `url(${props.bg_img})`};
  background-repeat: no-repeat;
  //background-position: center;
  background-size: cover;
  @media (max-width: 425px) {
    background-position-x: center;
    background-position-y: center;
  }

  &:before{
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-color: rgba(255, 255, 255, 0.6);
  }
`;

export const Backdrop = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  //backdrop-filter: grayscale(0.3) contrast(0.9) brightness(0.6);
`;
