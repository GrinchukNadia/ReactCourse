import React from 'react';
import {addMessageActionCreator, onMessageChangeActionCreator} from '../../redux/chat-reduser';
import StoreContext from '../../storeContext';
import Chat from "./Chat";


const ChatContainer = (props) => {

    
    return( 
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                
                    let addMessage = () => {
                        store.dispatch(addMessageActionCreator());
                    }
                    let onMessageChange = (text) => {
                        let action = onMessageChangeActionCreator(text);
                        store.dispatch(action);
                    }
                    return <Chat addMessage={addMessage} 
                              onMessageChange={onMessageChange}
                              messageData={state.chatPage.messageData}
                              newMessage={state.chatPage.newMessage}
                              friendsData={state.chatPage.friendsData}/>
                }
            }

        </StoreContext.Consumer>
    )
}


export default ChatContainer;