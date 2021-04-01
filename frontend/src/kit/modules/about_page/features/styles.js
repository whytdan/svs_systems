import styled from 'styled-components';

export const FeaturesCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  row-gap: 30px;
  padding-top: 30px;
`;

export const FeatureCard = styled.div`
  display: grid;
`;
export const FeatureNumber = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  border: 2px solid #fff;
  color: #ffffff;
  font-size: 20px;
  line-height: 75px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 35px;
`;

export const FeatureInfo = styled.div`
  h3 {
    text-align: center;
    color: #ffffff;
    margin-bottom: 15px;
  }
  p {
    color: #ffffff;
    text-align: center;
  }
`;
