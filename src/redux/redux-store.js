import { combineReducers, createStore } from "redux";
import profileReduser from "./profile-reduser";
import chatReduser from "./chat-reduser";
import usersReduser from "./users-reduser";

let redusers = combineReducers({
   profilePage: profileReduser,
   chatPage: chatReduser,
   usersPage: usersReduser 
});

let store = createStore(redusers);


export default store;