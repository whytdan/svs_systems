import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin-top: 30px;
  padding-top: 15px;
`;

export const Image = styled.div`
  min-width: 370px;
  height: 264px;
  background-image: ${(props) => `url(${props.img})`};
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 30px;
`;

export const Description = styled.div`
  h4 {
    font-weight: normal;
    margin-bottom: 15px;
  }
`;
