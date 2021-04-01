import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: block;
  ul {
    height: 100%;
    display: grid;
    align-items: center;
    grid-auto-flow: column;
    grid-template-rows: 1fr;
    column-gap: 30px;
    list-style-type: none;
    li {
      a {
        text-transform: uppercase;
        /* color: #ffffff; */
        /* color: #4f4f4f; */
        font-size: 18px;
        transition: 0.3s;
        &:hover {
          color: #15c3cb !important;
        }
      }
    }
  }
  @media (max-width: 1150px) {
    display: none;
  }
`;
