import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state'



ReactDOM.render(
  <React.StrictMode>
    <App state={state.profilePage} chat={state.chatPage} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
