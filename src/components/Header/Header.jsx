import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';
//import logo from './img/logo.svg'

const Header = (props) => {
    return (
        <header className={style.header}>
            <img src='logo_at_work.png' alt='' />
            <div className={style.loginBlock}>
                {(props.isAuth) ? (<NavLink to={'/login'}>{props.login}</NavLink>) : 'Not Login'}
                {/* sadad */}
                {/* sadad */}
            </div>
        </header>
    );
}

export default Header;