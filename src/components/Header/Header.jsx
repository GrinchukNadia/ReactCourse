import React from 'react';
import s from './Header.module.css'
import logo from './../../img/logo.png'

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <img src={logo}></img>
            </div>
        </header>
    )
}

export default Header;