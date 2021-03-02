import styled from 'styled-components';

export const ServicesBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row;
  @media (max-width: 1250px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 20px;
    grid-column-gap: 20px;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-row-gap: 15px;
  }
`;

export const ServiceCard = styled.div`
  display: grid;
  margin-top: 30px;
  padding: 0 15px;
  grid-template-areas:
    'icon title title'
    'icon text text'
    'icon text text';
  @media (max-width: 600px) {
    padding: 0;
  }
`;

export const CardIcon = styled.div`
  grid-area: icon;
  margin-right: 24px;
  img {
    height: 36px;
    width: auto;
  }
  @media (max-width: 600px) {
    margin-right: 10px;
  }
`;

export const CardTitle = styled.h3`
  grid-area: title;
  color: #4f4f4f;
  span {
    font-weight: 300;
  }
`;

export const CardText = styled.p`
  color: #878787;
  grid-area: text;
  margin-top: 15px;
  line-height: 25px;
`;
