import React from 'react';
import style from './Dialogues.module.css';
import AddMessageContainer from './AddMessage/AddMessageContainer';
import DilogItemNavContainer from './DilogItemNav/DilogItemNavContainer';
import OutputMessagesContainer from './OutputMessages/OutputMessagesContainer';

const Dialogues = () => {

    return (
        <div className={style.dialogs} >
            <DilogItemNavContainer />
            <div>
                <OutputMessagesContainer />
                <div>
                    <AddMessageContainer />
                </div>
            </div>
        </div>
    );
}

export default Dialogues;