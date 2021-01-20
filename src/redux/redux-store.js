import { combineReducers, createStore } from "redux";
import profileReduser from "./profile-reduser";
import chatReduser from "./chat-reduser";

let redusers = combineReducers({
   profilePage: profileReduser,
   chatPage: chatReduser 
});

let store = createStore(redusers);

export default store;