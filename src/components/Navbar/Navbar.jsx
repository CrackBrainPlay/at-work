import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import SideBarContainer from './Sidebar/SideBarContainer';

const Navbar = (props) => {
    return (
        <nav className={style.nav}>
            <div className={style.box}>
                <div className={style.item}><img className={style.img} src='img/profile.png' alt='Profile' /><NavLink className={({ isActive }) => isActive ? style.activeLink : ''} to="/Profile">&nbsp;Profile</NavLink></div>
                <div className={style.item}><img className={style.img} src='img/contacts.png' alt='Users' /><NavLink className={({ isActive }) => isActive ? style.activeLink : ''} to="/Users">&nbsp;Users</NavLink></div>
                <div className={style.item}><img className={style.img} src='img/messages.png' alt='Messages' /><NavLink className={({ isActive }) => isActive ? style.activeLink : ''} to="/Dialogues">&nbsp;Messages</NavLink></div>
                <div className={style.item}><img className={style.img} src='img/news.png' alt='News' /><NavLink className={({ isActive }) => isActive ? style.activeLink : ''} to="News">&nbsp;News</NavLink></div>
                <div className={style.item}><img className={style.img} src='img/music.png' alt='Music' /><NavLink className={({ isActive }) => isActive ? style.activeLink : ''} to="Music">&nbsp;Music</NavLink></div>
                <br></br>
                <div className={style.item}><img className={style.img} src='img/settings.png' alt='Settings' /><NavLink className={({ isActive }) => isActive ? style.activeLink : ''} to="Settings">&nbsp;Settings</NavLink></div>
                {/* <div className={style.item}><SideBar dialogsData={props.dialogsData}/></div> */}
                <br></br>
                <div className={style.side}><SideBarContainer /></div>
            </div>
        </nav>
    );
}

export default Navbar;