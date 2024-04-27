import React from 'react';
import style from './SideBar.module.css';
import ProfileBox from './ProfileBox/ProfileBox'

const SideBar = (props) => {

    let profileElements = props.dialogsData
        .slice(0, 3).map(person => (<ProfileBox itemName={person.name} id={person.id} key={person.id} />))

    return (
        <div className={style.sideBar}>
            <div className={style.box}>
                <div className={style.item}>
                    {profileElements}
                </div>
            </div>
        </div>
    );
}

export default SideBar;