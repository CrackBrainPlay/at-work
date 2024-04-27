import React from 'react';
import style from './DilogItemNav.module.css';
import DialogItem from './DialogItem/DialogItem';

const DilogItemNav = (props) => {

    let dialogsElements = props.dialogsData
        .map(dialog => (<DialogItem itemName={dialog.name} id={dialog.id} key={dialog.id} />))

    return (
        <div className={style.dialogs_items} >
            {dialogsElements}
        </div>
    );
}

export default DilogItemNav;