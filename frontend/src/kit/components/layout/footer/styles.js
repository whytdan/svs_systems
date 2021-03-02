import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: #cfd8dc;
  padding: 45px 0 !important;
  @media (max-width: 700px) {
    padding: 30px 0 !important;
  }
`;

export const FooterLinks = styled.ul`
  display: grid;
  grid-auto-flow: column;
  column-gap: 50px;
  align-items: center;
  justify-content: center;
`;

export const LogoImg = styled.img`
  height: 30px;
  filter: invert(61%) sepia(0%) saturate(7450%) hue-rotate(204deg)
    brightness(114%) contrast(68%);
  transition: 0.3s;
  &:hover {
    filter: invert(74%) sepia(54%) saturate(633%) hue-rotate(129deg)
      brightness(85%) contrast(86%);
  }
`;

export const Copyright = styled.p`
  color: #878787;
  text-align: center;
  margin-top: 30px;

  @media (max-width: 500px) {
    margin-top: 20px;
  }
`;
