import React from 'react';
import style from './Name.module.css'

const Name = (props) => {

    return (
        <div className={style.content}>
            {props.name}
        </div>
    )
}

export default Name;