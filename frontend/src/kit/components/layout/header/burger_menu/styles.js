import styled from 'styled-components';
import { Link } from '@reach/router';

export const StyledHeader = styled.div`
  display: block;
  background-color: #ffffff;
  h2 {
    font-size: 18px;
    line-height: 48px;
    text-align-last: left;
  }
  transition: 0.5s;
`;

export const StyledLink = styled(Link)`
  padding-top: 14px;
  padding-bottom: 16px;
  text-align: center;
  color: #838583;
  display: block;
  border: none;
  background: #ffffff;
  &:hover {
    color: #ffffff !important;
    background: #34dce3 !important;
  }
`;
