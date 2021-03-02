import styled from 'styled-components';

export const TestimonialCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
  row-gap: 45px;
`;

export const TestimonialCard = styled.div`
  display: flex;
`;

export const TestimonialAvatar = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  background-position: top;
  background-position-x: center;
  background-size: cover;
  min-width: 170px;
`;

export const TestimonialInfo = styled.div`
  background: #ffffff;
  padding: 20px 30px;
  p {
    font-style: italic;
    font-size: 14px !important;
    line-height: 22px !important;
  }
`;

export const TestimonialBio = styled.div`
  margin-top: 15px;
  h4 {
    font-size: 20px;
    line-height: 20px;
    color: #4f4f4f;
    letter-spacing: -0.3px;
  }
  span {
    display: block;
    color: #15dde4;
    font-size: 14px;
    line-height: 20px;
  }
`;
