import React, { useState } from 'react';
import style from './DropDownNav.module.css';
import { NavLink, useLocation } from 'react-router-dom';
// import BtnNav from '../BtnNav';
import BtnNav from '../../UiKit/BtnNav';


const DropDownNav = (props) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleLinkClick = () => {

        setIsMenuOpen(false);
    };

    return (
        <div className={style.dropdown}>
            <button className={style.dropbtn} onClick={toggleMenu}>
                {/* <button className={({ isActive }) => isActive ? style.dropbtnActive : style.dropbtn}> */}
                {/* <img src={<BtnNav />} alt='' /> */}
                {<BtnNav />}
                <form className={(props.to === useLocation().pathname) ? style.btnBorderActive : style.btnBorder} />
            </button>
            {isMenuOpen && (
                <div className={style.dropdown_content}>
                    <NavLink to='/home' onClick={handleLinkClick}
                        className={({ isActive }) => isActive ? style.activeLink : ''}>
                        Редактировать
                    </NavLink>
                    <NavLink to='/staticmixer' onClick={handleLinkClick}
                        className={({ isActive }) => isActive ? style.activeLink : ''}>
                        Архивировать
                    </NavLink>
                    <NavLink to='/flowchemistry' onClick={handleLinkClick}
                        className={({ isActive }) => isActive ? style.activeLink : ''}>
                        Скрыть
                    </NavLink>
                </div>
            )}
        </div>

    );
}

export default DropDownNav;