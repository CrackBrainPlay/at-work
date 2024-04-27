import React from 'react';
import style from './AddMessage.module.css';

const AddMessage = (props) => {

    let newPostElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newPostElement.current.value;
        props.onMessageChange(text);
    }

    return (
        <div>
            <div className={style.dialogs}>
                <textarea placeholder='Enter your message...'
                    className={style.dialogs_items}
                    onChange={onMessageChange}
                    ref={newPostElement}
                    value={props.newMessageText} />
            </div>
            <div>
                <button className={style.item} onClick={addMessage}>Add Post</button>
            </div>
        </div>
    )

};

export default AddMessage;
