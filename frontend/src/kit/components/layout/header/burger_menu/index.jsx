import React, { useState } from 'react';
import { StyledHeader, StyledLink } from './styles';

export default function BurgerMenu({open, setOpenMenu}) {


  return (
    <StyledHeader style={{height: open ? 336 : 0, opacity: open ? 1: 0}}>
      <nav>
        {
          open ? (
            <>
              <NavLink to='/'>Главная</NavLink>
              <NavLink to='/about'>О нас</NavLink>
              {/* <NavLink to='/services'>Сервисы</NavLink> */}
              <NavLink to='/blog'>Блог</NavLink>
              <NavLink to='/portfolio'>Портфолио</NavLink>
              <NavLink to='/languages'>Языки</NavLink>
              <NavLink to='/contact'>Контакты</NavLink>
            </>
          ) : null
        }
      </nav>
    </StyledHeader>
  );
}

// @media (max-width: 1080px) {
//   display: none; //should be block
// }

function NavLink(props) {
  return (
    <StyledLink
      {...props}
      getProps={({ isCurrent }) => {
        return {
          style: {
            color: isCurrent ? '#ffffff' : '#838583',
            background: isCurrent ? '#34dce3' : '#ffffff',
          },
        };
      }}
    >
      {props.children}
    </StyledLink>
  );
}
