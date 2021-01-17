import React from 'react';
import s from './Chat.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import AvatarItem from './AvatarItem/AvatarItem';
import {NavLink} from 'react-router-dom';


const Chat = (props) => {
    let message = props.chat.messageData.map( el => <Message person={el.person} message={el.text} />)
    let friends = props.chat.friendsData.map( el => {
        return (
            <NavLink exact to={`/chat/${el.id}`} className={s.friend}>
                <AvatarItem link={el.img} />
                <DialogItem name={el.name} />
            </NavLink>
        )
    })

    return(
        <div className={s.chatBlock}>
            <div className={s.friends}>
                { friends }

            </div>
            <div className={s.messages}>
                { message }
            </div>
        </div>
    )
}


export default Chat;