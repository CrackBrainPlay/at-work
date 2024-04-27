import React from 'react';
import style from './Posts.module.css';

const Posts = (props) => {
    return (
        <div className={style.item}>
            <img className={style.img} src='img/avatar.png' alt='' />
            <div className={style.text}>{props.message}</div>
            <div className={style.like}>&nbsp;Likes&nbsp;|&nbsp;<span>{props.counterLikes}</span>&nbsp;</div>
        </div>
    );
}

export default Posts;