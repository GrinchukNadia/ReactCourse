import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import store from './redux/redux-store'; 


let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App dispatch={store.dispatch.bind(store)}
           state={state} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());
store.subscribe( () => {
  rerenderEntireTree(store.getState())
});
export default rerenderEntireTree;


