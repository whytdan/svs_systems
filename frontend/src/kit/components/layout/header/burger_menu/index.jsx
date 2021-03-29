import React, {useState} from 'react';
import {StyledHeader, StyledLink} from './styles';
import useWindowSize from "./useWindowSize";

export default function BurgerMenu({open, setOpenMenu}) {

  const windowSize = useWindowSize();

  return (
    <StyledHeader style={{height: open && windowSize < 1150 ? 336 : 0, opacity: open && windowSize < 1150 ? 1 : 0}}>
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

function NavLink(props) {
	return (
    <StyledLink
      {...props}
      getProps={({isCurrent}) => {
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
