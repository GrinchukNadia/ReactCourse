import React from 'react';
import s from './Chat.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import AvatarItem from './AvatarItem/AvatarItem';
import {NavLink} from 'react-router-dom';
// import {addMessageActionCreator, onMessageChangeActionCreator} from './../../redux/chat-reduser'


const Chat = (props) => {
    let message = props.messageData.map( el => <Message person={el.person} message={el.text} />)
    let friends = props.friendsData.map( el => {
        return (
            <NavLink exact to={`/chat/${el.id}`} className={s.friend}>
                <AvatarItem link={el.img} />
                <DialogItem name={el.name} />
            </NavLink>
        )
    })

    // let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.onMessageChange(text)
        // let text = newMessageElement.current.value;
        // let action = onMessageChangeActionCreator(text);
        // props.dispatch(action);
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
                        // ref={newMessageElement} 
                        onChange={onMessageChange}/>
                    <button onClick={addMessage}>Отправить</button>
                </div>
            </div>
        </div>
    )
}


export default Chat;