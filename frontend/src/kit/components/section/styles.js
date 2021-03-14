import styled from 'styled-components';

export const StyledSection = styled.section`
  min-width: 300px;
  height: auto;
  background-color: ${(props) =>
    props.bg_color === 'lightgrey'
      ? '#cfd8dc'
      : 'darkgrey'
      ? '#4f4f4f' 
      : '#ffffff'};
      /* 525252 */
  background-image: ${(props) => `url(${props.bg_img})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom: ${(props) =>
    props.border_bottom ? '1px solid #a1a1a1' : 'none'};
`;

export const Backdrop = styled.div`
  padding: 85px;
  backdrop-filter: ${(props) =>
    props.bg_img ? 'grayscale(0.3) contrast(0.9) brightness(0.4)' : 'none'};

  @media (max-width: 540px) {
    padding: 40px 15px;
  }
`;
