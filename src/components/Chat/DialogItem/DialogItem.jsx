import React from 'react';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    return (
    <NavLink exact to={props.link} > {props.name} </NavLink>
    )
}

export default DialogItem;