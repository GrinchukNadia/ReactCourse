import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import ChatContainer from './components/Chat/ChatContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import {BrowserRouter , Route} from "react-router-dom";


const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="wrapper wrapperMain">
          <Sidebar />
          <Route path="/profile" render={() => <Profile />}/>
          <Route path="/chat" render={() => <ChatContainer />}/>
          <Route path="/news" render={() => <News/> } />
          <Route path="/music" render={() => <Music/> } />
        </div>
      </div>
    </BrowserRouter>
  );
} 
export default App;
