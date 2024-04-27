// import React from 'react';
// import { addPostActionCreator, onPostChangeActionCreator } from '../../../../Redux/profileReducer';
import { addPost, onPostChange } from '../../../../Redux/profileReducer';
import AddPost from './AddPost';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText
    }
}

// const mapDipatchToProps = (dispatch) => {
//     return {
//         addPost: () => {
//             dispatch(addPostActionCreator());
//         },
//         updateNewPostText: (text) => {
//             dispatch(onPostChangeActionCreator(text));
//         }
//     }
// }

const AddPostContainer = connect(mapStateToProps, {
    addPost,
    updateNewPostText: onPostChange
})(AddPost);

export default AddPostContainer;
