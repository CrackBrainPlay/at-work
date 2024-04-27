import React from 'react';
import style from './OutputPosts.module.css';
import Posts from '../Posts/Posts';

const OutputPosts = (props) => {
    let postsElement = props.postsData
        .map(post => (<Posts message={post.text} counterLikes={post.counterLikes} key={post.id} />))

    return (
        <div className={style.content} >
            <div className={style.item}>
                {postsElement}
            </div>
        </div>
    );
}

export default OutputPosts;