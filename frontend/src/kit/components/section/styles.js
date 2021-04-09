import styled from 'styled-components';

export const StyledSection = styled.section`
  min-width: 300px;
  height: auto;
  position: relative;
  background-color: ${(props) =>
    props.bg_color === 'lightgrey'
      ? '#cfd8dc'
      : props.bg_color === 'darkgrey'
      ? '#0f0f0f' 
      : props.bg_color === 'white' 
      ? '#ffffff'
      : props.bg_color === 'darkblue' ?
      '#041c3f' : "#ffffff"
    };

  &:before{
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-image: ${(props) => `url(${props.bg_img})`};
    filter: brightness(30%);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover; 
    border-bottom: ${(props) =>
      props.border_bottom ? '1px solid #a1a1a1' : 'none'};
  }

`;

export const Backdrop = styled.div`
  padding: 85px;
  filter: brightness(100%);
  /* filter: ${(props) =>
    props.bg_img ? 'brightness(30%)' : 'none'}; */

  @media (max-width: 540px) {
    padding: 40px 15px;
  }
`;
