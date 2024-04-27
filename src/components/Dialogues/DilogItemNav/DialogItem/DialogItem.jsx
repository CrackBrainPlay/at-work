import React from 'react';
import { NavLink } from 'react-router-dom';
import PersonProfile from './PersonProfile/PersonProfile';
import style from './../DilogItemNav.module.css';

const DialogItem = (props) => {
    let path = "/Dialogues/" + props.id;
    return (
        <div className={style.item}>
            <NavLink className={({ isActive }) => isActive ? style.activeLink : ''} to={path}>
                <PersonProfile personName={props.itemName} />
            </NavLink>
        </div>
    );
}

export default DialogItem;