const ADD_MESSAGE = "ADD-MESSAGE";
const ON_MESSAGE_CHANGE = "ON-MESSAGE-CHANGE";

const chatReduser = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE : 
            let newMessage = {
            text: state.newMessage,
            person: "me"};
        
            state.messageData.push(newMessage);
            state.newMessage = "";
            return state;

        case ON_MESSAGE_CHANGE :
            state.newMessage = action.text;
            return state;

        default:
            return state;
    }
}

export let addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
  }
export let onMessageChangeActionCreator = (text) => {
    return {
        type: ON_MESSAGE_CHANGE,
        text: text
    }
  }

export default chatReduser;