import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 30px;
  margin-top: 30px;
  padding-top: 15px;
  
  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  }
  
  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0;
    grid-row-gap: 30px;
  }
`;

export const Image = styled.div`
  min-width: 250px;
  height: 264px;
  background-image: ${(props) => `url(${props.img})`};
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
`;
