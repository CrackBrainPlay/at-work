import React from 'react';
import style from './ActiveUsers.module.css'
import Name from '../Name/Name';

const ActiveUsers = (props) => {

    return (
        <div className={style.content}>
            <Name name='Активные' />
            <div className={style.header}>Активные</div>
        </div>
    )
}

export default ActiveUsers;