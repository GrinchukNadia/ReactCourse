import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost} from './redux/state'; 
import {onPostChange} from './redux/state'; 


let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App onPostChange={onPostChange} addPost={addPost} profilePage={state.profilePage} chat={state.chatPage} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

export default rerenderEntireTree;

// reportWebVitals();

