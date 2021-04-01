import styled from 'styled-components';

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 20px;
  column-gap: 30px;
  max-width: 1440px;
  margin: 0 auto;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
  }
  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
`;

export const Card = styled.div`
  margin-top: 30px;
  background: #ffffff;
  cursor: pointer;
  transition: 0.5s;
  min-height: 515px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  &:hover{
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
`;

export const CardImg = styled.div`
  width: 100%;
  height: 243px;
  background-image: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`;

export const CardBody = styled.div`
  padding: 25px 30px 22px 30px;
  p {
    margin-top: 15px;
  }
`;

export const CardFooter = styled.div`
  padding: 20px 30px 25px;
  border-top: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  img {
    margin-right: 3px;
    height: 13px;
  }

  span {
    font-size: 14px;
    color: #878787;
  }
`;

export const Button = styled.button`
  display: block !important;
  margin: 40px auto 0;
  padding: 12px 40px;
  word-spacing: normal;
  margin-bottom: 5px;
  display: inline-block;
  border: 2px solid #878787;
  border-radius: 5px;
  padding: 12px 40px;
  color: #878787;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
  font-weight: 700;
  transition: 0.3s;
  &:hover {
    border: 2px solid #2cc3cb;
    color: #2cc3cb;
  }
`;