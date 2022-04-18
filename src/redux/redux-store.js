import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReduser from "./profile-reduser";
import chatReduser from "./chat-reduser";
import usersReduser from "./users-reduser";
import authReduser from "./auth-reduser";
import thunkMiddleware from "redux-thunk";


let redusers = combineReducers({
   profilePage: profileReduser,
   chatPage: chatReduser,
   usersPage: usersReduser,
   auth: authReduser,
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));


export default store;