import styled from 'styled-components';

export const StyledH6 = styled.h6`
  max-width: 1000px;
  color: ${(props) =>
  props.color === 'grey' ? '#4f4f4f' : 'white' ? '#ffffff' : '#4f4f4f'};
  margin: 25px auto;
  text-align: center;
    @media (max-width: 940px) {
    font-size: 14px;
  }
`;
