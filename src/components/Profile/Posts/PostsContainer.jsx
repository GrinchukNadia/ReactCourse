import React from 'react';
import Posts from './Posts'
import {addPostActionCreator, onPostChangeActionCreator} from '../../../redux/profile-reduser'
import StoreContext from './../../../storeContext';

const PostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
     {
       (store) => {
         let state = store.getState();
       
         let addPost = () => {
           debugger;
           store.dispatch(addPostActionCreator());
         }
       
         let onPostChange = (text) => {
           let action = onPostChangeActionCreator(text);
           store.dispatch(action);
         }
         return <Posts addPost={addPost} 
                       onPostChange={onPostChange} 
                       posts={state.profilePage.commentsData}
                       newPostElement={state.profilePage.newPost} />
       }
     }
    </StoreContext.Consumer>
  )
}

export default PostsContainer;