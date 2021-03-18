import React from 'react';
import { Link } from '@reach/router';
import HeaderNav from '../header_nav';
import { StyledUpperHeader, StyledLogo, LogoStyledBg } from './styles';
import PT from 'prop-types';
// import MenuIcon from '@material-ui/icons/Menu';
export default function UpperHeader(props) {
  return (
    <StyledUpperHeader scrolled={props.scrolled} isLanguagesPage={props.isLanguagesPage}>
      <LogoStyledBg>
        <StyledLogo>
          <Link to='/'>
            <img src='/images/svs-systems-logo.png' alt='logo' />
          </Link>
        </StyledLogo>
      </LogoStyledBg>

      <HeaderNav scrolled={props.scrolled} />

      <img src="/icons/menu.png" alt="menu" onClick={() => props.setOpenMenu(!props.open)} />

    </StyledUpperHeader>
  );
}

UpperHeader.propTypes = {
  scrolled: PT.bool,
};
