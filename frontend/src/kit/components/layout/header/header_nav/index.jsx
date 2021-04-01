import React from 'react';
import NavLink from '../navlink';
import { StyledNav } from './styles';

export default function HeaderNav({scrolled}) {
  return (
    <StyledNav>
      <ul>
        <li>
          <NavLink scrolled={scrolled} to='/'>Главная</NavLink>
        </li>
        <li>
          <NavLink scrolled={scrolled} to='/about'>О нас</NavLink>
        </li>
        {/* <li>
          <NavLink to='/services'>Сервисы</NavLink>
        </li> */}
        <li>
          <NavLink scrolled={scrolled} to='/blog'>Блог</NavLink>
        </li>
        <li>
          <NavLink scrolled={scrolled} to='/portfolio'>Портфолио</NavLink>
        </li>
        <li>
          <NavLink scrolled={scrolled} to='/languages'>Языки</NavLink>
        </li>
        <li>
          <NavLink scrolled={scrolled} to='/contact'>Контакты</NavLink>
        </li>
      </ul>
    </StyledNav>
  );
}
