import React from 'react';
import style from './PreLoader.module.css'

const PreLoader = (props) => {

    return (
        <div className={style.content}>
            {/* {props.isFetching ? <img src='img/preloaded.gif' alt='preloaded' /> : null} */}
            <img src='img/preloaded.gif' alt='preloaded' />
        </div>
    )
}

export default PreLoader;