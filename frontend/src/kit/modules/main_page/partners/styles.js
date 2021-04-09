import styled from 'styled-components';

export const Section = styled.div`
  padding: 40px 83px;
  /* background-color: #cfd8dc; */
  background-color: #fff;
  /* border-top: 1px solid #0f0f0f; */
  @media (max-width: 700px) {
    padding: 30px 23px;
  }
  @media (max-width: 550px) {
    padding: 25px 13px;
  }
  @media (max-width: 450px) {
    padding: 15px 5px;
  }
`;

export const CustomersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 30px;

  @media (max-width: 550px) {
    justify-content: space-around;
  }

  img{
    margin: 20px;
    @media (max-width: 550px) {
      margin: 10px;
    }
  }
`;

export const CustomerLogoHorizontal = styled.div`
  opacity: 1;
  cursor: pointer;
  img {
    transition: 0.5s;
    height: 65px;
    @media (max-width: 700px) {
      height: 55px;
    }
    @media (max-width: 550px) {
      height: 45px;
    }
    @media (max-width: 450px) {
      height: 40px;
    }
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
      opacity: 1;
    }
  }
`;

export const CustomerLogoVertical = styled.div`
  cursor: pointer;
  img {
    transition: 0.5s;
    height: 80px;
    @media (max-width: 700px) {
      height: 70px;
    }
    @media (max-width: 550px) {
      height: 60px;
    }
    @media (max-width: 450px) {
      height: 55px;
    }
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
      opacity: 1;
    }
  }
`;
