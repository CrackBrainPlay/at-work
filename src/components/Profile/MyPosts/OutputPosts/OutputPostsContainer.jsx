// import React from 'react';
// import style from './OutputPosts.module.css';
// import Posts from '../Posts/Posts';
import { connect } from 'react-redux';
import OutputPosts from './OutputPosts';

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData
    }
}

const OutputPostsContainer = connect(mapStateToProps)(OutputPosts);

export default OutputPostsContainer;