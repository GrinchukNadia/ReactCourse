import React from 'react';
import s from './Header.module.css';
import logo from './../../img/logo.png';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    
  return (
    <header className={s.header}>
      <div className={s.header__container}>
        <div className={s.wrapper}>
          <img src={logo}></img>
        </div>
        <div className={s.loginBlock}>
            {props.isAuth ? <span>logout</span> : <NavLink to='/login'><span>Login</span></NavLink>}
          
        </div>
      </div>
    </header>
  );
};

export default Header;
