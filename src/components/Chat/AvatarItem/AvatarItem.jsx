import React from 'react';
import s from './AvatarItem.module.css';

const Avatar = (props) => {
    return (
        <div className={s.avatar}>
            <img src={props.link} alt=""/>
        </div>
    )
}
export default Avatar;

