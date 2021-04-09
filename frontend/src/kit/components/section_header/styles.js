import styled from 'styled-components';

export const StyledSectionHeader = styled.h2`
  font-size: 40px;
  line-height: 42px;
  font-weight: normal;
  color: ${(props) =>
  props.color === 'grey' ? '#0f0f0f' : props.color === 'white' ? '#ffffff' : '#0f0f0f'};
  letter-spacing: -0.5px;
  text-align: center;
  span {
    font-weight: 500;
  }
  @media (max-width: 940px) {
    font-size: 38px;
    line-height: 42px;
  }
  @media (max-width: 540px) {
    font-size: 32px;
    line-height: 38px;
  }
`;
