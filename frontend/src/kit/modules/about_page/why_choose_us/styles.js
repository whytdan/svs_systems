import styled from 'styled-components';

export const WhyCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  row-gap: 30px;
  padding-top: 30px;
`;

export const WhyCard = styled.div`
  h3 {
    font-size: 20px;
    line-height: 20px;
    color: #4f4f4f;
    letter-spacing: -0.4px;
    font-weight: 500;
  }
  p {
    margin-top: 15px;
  }
`;
