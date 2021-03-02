import styled from 'styled-components';

export const StyledBottomHeader = styled.div`
  display: ${(props) => (props.bottom_header === true ? 'block' : 'none')};
  padding-top: 85px;
  padding-bottom: 110px;
  padding-left: 10%;
  padding-right: 10%;
  text-align: center;
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  position: relative;
  @media (max-width: 500px) {
    padding-left: 5%;
    padding-right: 5%;
  }
  h2 {
    font-size: 48px;
    line-height: 50px;
    letter-spacing: 1px;
    span {
      font-weight: 700;
      letter-spacing: 0;
    }
  }
  p {
    margin: 25px 0;
    color: #ffffff;
    font-size: 16px;
  }
  @media (max-width: 1250px) {
    h2 {
      font-size: 40px;
      line-height: 50px;
    }
  }
  @media (max-width: 900px) {
    h2 {
      font-size: 36px;
      line-height: 40px;
    }
  }
  @media (max-width: 500px) {
        h2 {
      font-size: 34px;
    }
  }
`;
