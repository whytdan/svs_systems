import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;
  column-gap: 30px;
  margin-top: 30px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr;
    grid-row-gap: 10px;
  }
`;

export const SectionHeader = styled.h2`
  font-size: 30px;
  line-height: 42px;
  color: #ffffff;
  font-weight: normal;
  span {
    font-weight: 500;
  }
`;

export const SectionText = styled.p`
  margin-top: 25px;
  color: #ffffff;
  font-weight: 400;
  line-height: 25px;
`;

export const LanguagesLists = styled.div`
  display: grid;
  grid-auto-flow: column;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-auto-flow: row;
  row-gap: 7px;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 16px;
      width: auto;
      margin-right: 7px;
    }
    span {
      color: #ffffff;
      font-size: 15px;
      line-height: 25px;
    }
  }
`;
