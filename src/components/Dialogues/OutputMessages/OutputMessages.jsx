import React from 'react';
import style from './OutputMessages.module.css';
import Message from './Message/Message';

const OutputMessages = (props) => {

    let massagesElements = props.massagesData
        .map(massage => (<Message text={massage.text} id={massage.id} key={massage.id} />))
    return (
        <div className={style.messages}>
            {massagesElements}
        </div>
    );
}

export default OutputMessages;