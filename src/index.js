import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import store from './redux/state'; 


let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App onPostChange={store.onPostChange.bind(store)} 
           addPost={store.addPost.bind(store)} 
           state={state} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());
store.updateDom(rerenderEntireTree);
export default rerenderEntireTree;


