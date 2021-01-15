import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
    return (
    <div className={s.chat}>
        <div className={s.friend}>
            {props.message}
        </div>
    </div>
    )
}

export default Message;