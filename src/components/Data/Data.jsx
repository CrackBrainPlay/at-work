import React from 'react';
import style from './Data.module.css';
import UsersContainer from '../Users/UsersContainer';

const Data = () => {
    return (
        <div className={style.content} >
            <div className={style.box} >
                <div className={style.active}>
                    <div className={style.header}>Активные</div>
                    <div className={style.cards}>
                        {/* <div className={style.cards1}> */}
                        <UsersContainer />
                        {/* </div> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
            <div className={style.box} >
                <div className={style.active}>
                    <div className={style.header}>Архив</div>
                    <div className={style.cards}>
                        {/* <div className={style.cards1}> */}
                        <UsersContainer />
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;