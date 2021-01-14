import React from 'react';
import s from './Chat.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Chat = (props) => {
    let message = props.chat.messageData.map( el => <Message message={el.text} />)

    let friends = props.chat.friendsData.map( el => <DialogItem link={"/chat/" + el.id} name={el.name} />)

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