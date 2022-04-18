import React from 'react';
import s from './Message.module.css';
import './Message.css';

const Message = (props) => {
    let person = props.person;
    return (
    <div className={s.chat}>
        <div id={person} className={s.friend}>
            <p>
                {props.message}
            </p>
        </div>
    </div>
    )
}

export default Message;