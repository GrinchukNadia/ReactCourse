import React from 'react';
// import s from './Chat.module.css';
// import DialogItem from './DialogItem/DialogItem';
// import Message from './Message/Message';
// import AvatarItem from './AvatarItem/AvatarItem';
// import {NavLink} from 'react-router-dom';
import {addMessageActionCreator, onMessageChangeActionCreator} from '../../redux/chat-reduser';
import Chat from "./Chat";


const ChatContainer = (props) => {

    let state = props.store.getState();

    let addMessage = () => {
        state.dispatch(addMessageActionCreator());
    }
    let onMessageChange = (text) => {
        let action = onMessageChangeActionCreator(text);
        props.store.dispatch(action);
    }

    return( <Chat addMessage={addMessage} 
                  onMessageChange={onMessageChange}
                  messageData={state.chatPage.messageData}
                  newMessage={state.chatPage.newMessage}
                  friendsData={state.chatPage.friendsData}/>)
}


export default ChatContainer;