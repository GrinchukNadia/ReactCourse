import React from 'react';
import Post from './Post/Post'
import s from './Posts.module.css'
// import {addPostActionCreator, onPostChangeActionCreator} from './../../../redux/profile-reduser'


const Posts = (props) => {

debugger; 
  let coments = props.posts.map( post => <Post  image={post.image} message={post.message} likes={post.likes} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
    // props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.onPostChange(text);
    // let action = onPostChangeActionCreator(text);
    // props.dispatch(action);
  }

  return (
      <div>My posts
        <div className={s.addMessage}>
          <textarea value={props.newPostElement} 
                    onChange={onPostChange}
                    ref={newPostElement} 
                    name="" id="" />
          <div>
            <button onClick={addPost}>Add post</button>
          </div>
        </div>
        { coments }
      </div>
    )
}

export default Posts;