import React from 'react';
import s from './Chat.module.css';
import './Chat.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import AvatarItem from './AvatarItem/AvatarItem';
import {NavLink} from 'react-router-dom';


const Chat = (props) => {
    let message = props.messageData.map( el => <Message person={el.person} key={el.id} message={el.text} />)
    let friends = props.friendsData.map( el => {
        return (
            <NavLink exact to={`/chat/${el.id}`} className={s.friend}>
                <AvatarItem link={el.img} />
                <DialogItem name={el.name} />
            </NavLink>
        )
    })

    let addMessage = () => {
        props.addMessage();
    }
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.onMessageChange(text);
    }

    return(
        <div className={s.chatBlock}>
            <div className={s.friends}>
                { friends }

            </div>
            <div className={s.messages}>
                { message }
                <div>
                    <textarea 
                        className={s.textarea} 
                        name="message"
                        value={props.newMessage}
                        onChange={onMessageChange}/>
                    <button onClick={addMessage}>Отправить</button>
                </div>
            </div>
        </div>
    )
}


export default Chat;