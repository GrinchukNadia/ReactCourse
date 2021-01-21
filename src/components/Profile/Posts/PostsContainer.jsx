import React from 'react';
import Posts from './Posts'
import {addPostActionCreator, onPostChangeActionCreator} from '../../../redux/profile-reduser'


const PostsContainer = (props) => {
  let state = props.store.getState();

  // let coments = props.state.commentsData.map( post => <Post  image={post.image} message={post.message} likes={post.likes} />)
  // let newPostElement = React.createRef();

  let addPost = () => {
    debugger;
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {
    let action = onPostChangeActionCreator(text);
    props.store.dispatch(action);
  }

  return (<Posts addPost={addPost} 
                 onPostChange={onPostChange} 
                 posts={state.profilePage.commentsData}
                 newPostElement={state.profilePage.newPost} />)
}

export default PostsContainer;