import React from 'react';
import NavLink from '../navlink';
import { StyledNav } from './styles';

export default function HeaderNav(props) {
  return (
    <StyledNav>
      <ul>
        <li>
          <NavLink to='/'>Главная</NavLink>
        </li>
        <li>
          <NavLink to='/about'>О нас</NavLink>
        </li>
        {/* <li>
          <NavLink to='/services'>Сервисы</NavLink>
        </li> */}
        <li>
          <NavLink to='/blog'>Блог</NavLink>
        </li>
        <li>
          <NavLink to='/portfolio'>Портфолио</NavLink>
        </li>
        <li>
          <NavLink to='/languages'>Языки</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Контакты</NavLink>
        </li>
      </ul>
    </StyledNav>
  );
}
