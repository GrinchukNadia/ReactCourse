import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import ChatContainer from './components/Chat/ChatContainer';
import Music from './components/Music/Music';
import {BrowserRouter , Route} from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';


const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <div className="wrapper wrapperMain">
          <Sidebar />
          <Route path="/profile/:userId?" render={() => <ProfileContainer /> }/>
          <Route path="/chat" render={() => <ChatContainer />}/>
          <Route path="/news" render={() => <UsersContainer/> } />
          <Route path="/music" render={() => <Music/> } />
          <Route path="/login" render={() => <Login/> } />
        </div>
      </div>
    </BrowserRouter>
  );
} 
export default App;
