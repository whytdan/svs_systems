import styled from 'styled-components';

export const PricingCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 20px;
    grid-column-gap: 20px;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-row-gap: 15px;
  }
`;

export const CardWrapper = styled.div`
  margin-top: 30px;
  padding-left: 15px;
  padding-right: 15px;
  @media (max-width: 600px) {
    padding: 0;
  }
`;

export const Card = styled.div`
  height: auto;
  padding: 25px 17px 40px 30px;
  @media (max-width: 600px) {
    padding: 25px 0px 40px 0px;
  }
  text-align: center;
  color: #fff;
  max-width: 400px;
  margin: 25px auto 0;
  border: 3px solid #ffffff;
`;

export const CardHeader = styled.div`
  border-bottom: 2px solid #fff;
  padding-bottom: 33px;
  h2 {
    color: #fff;
    font-weight: 500;
    font-size: 28px;
    line-height: 42px;
    letter-spacing: -0.5px;
    text-align: center;
    @media (max-width: 600px) {
      font-size: 34px;
      line-height: 42px;
    }
  }
`;

export const CardBody = styled.div`
  // border-bottom: 2px solid #fff;
  padding: 15px 0 20px;
  margin-top: 33px;
  margin-bottom: 25px;
  font-size: 15px;
  line-height: 28px;
  ul {
    list-style-type: circle;
  }

  @media (max-width: 600px){
    padding-left: 25px;
    padding-right: 25px;
  }

  ul li {
    text-align: left;
  }
`;

export const CardFooter = styled.div`
  font-size: 18px;
  line-height: 42px;
  vertical-align: baseline;
  span {
    display: inline-block;
    font-weight: 500;
    line-height: 22px;
    color: #ffffff;
    font-size: 40px;
  }
`;

export const CardSecondaryText = styled.p`
  font-size: 16px;
  margin: 30px auto;
  text-align: center;
  width: 80%;
  color: #fff;
`;