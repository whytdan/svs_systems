import styled from 'styled-components';

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;
  padding-top: 30px;
  row-gap: 30px;
    
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

export const Card = styled.div`
  display: grid;
  grid-auto-flow: row;
  min-height: 430px;
  height: auto;

`;

export const CardAvatar = styled.div`
  background: #fff;
  width: 100%;
  height: auto;
`;

export const CardAvatarImage = styled.div`
  width: 90%;
  height: 270px;
  display: block;
  margin: 10px auto;
  background-image: ${(props) => `url(${props.img})`};
  background-position: top;
  background-position-x: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;

`;

export const CardInfo = styled.div`
  background-color: #ffffff;
  padding: 25px 30px;
  h3 {
    color: #353434 !important;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: -0.4px;
    font-weight: 500;
  }
  p {
    margin-top: 20px;
  }
`;
