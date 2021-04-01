import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 80%;
  max-width: 700px;
  margin: 50px auto;
  padding-top: 15px;
`;

export const Image = styled.div`
  min-width: 250px;
  height: 264px;
  background-image: ${(props) => `url(${props.img})`};
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
`;
