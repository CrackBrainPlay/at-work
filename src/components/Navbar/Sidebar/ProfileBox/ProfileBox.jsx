import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './ProfileBox.module.css';


const Profilebox = (props) => {
    let path = "/Dialogues/" + props.id;

    return (
        <div className={style.content} >
            <NavLink className={({ isActive }) => isActive ? style.activeLink + ' ' + style.item : style.item} to={path}>
                <div>
                    <div><img className={style.img} src='img/avatar.png' alt='Profile' />
                    </div>
                    <div className={style.item}>
                        {props.itemName}
                    </div>
                </div >
            </NavLink>
        </div >
    );
}

export default Profilebox;