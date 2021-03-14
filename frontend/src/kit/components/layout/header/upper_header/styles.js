import styled from 'styled-components';

export const StyledUpperHeader = styled.div`
  height: auto;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => (props.scrolled === true ? '10px 83px' : '15px 83px')};
  min-width: 300px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  /* background-color: ${(props) =>
    props.scrolled === true ? '#CFD8DB' : 'none'}; */

  background-color: ${(props) =>
    props.scrolled === true || props.isLanguagesPage === true ? '#4f4f4f' : 'none'};

  /* background-color: #4f4f4f; */

  @media (max-width: 425px) {
    justify-content: space-around;
    padding: 40px 0 !important;
    align-items: center;
  }
  img {
    display: none;
    width: 35px;
    height: 35px;
    &:hover{
      opacity: 0.8;
    }
    @media (max-width: 1150px) {
      display: block;
    }
    &:first-child {
      display: block;
    }
  }
`;

export const StyledLogo = styled.div`
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      width: auto;
      height: 80px;
      margin-right: 10px;
      @media (max-width: 425px) {
        height: 60px;
      }
    }
    h2 {
      text-transform: uppercase;
      color: #ffffff;
      font-size: 34px;
      font-weight: 300;
      display: inline-block;
      span {
        color: #15c3cb;
      }
      @media (max-width: 425px) {
        font-size: 20px;
      }
    }
  }
`;
