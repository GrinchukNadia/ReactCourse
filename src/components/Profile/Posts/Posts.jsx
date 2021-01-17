import React from 'react';
import Post from './Post/Post'
import s from './Posts.module.css'

const Posts = (props) => {


  let coments = 
    props.profilePage
    .map( post => <Post  image={post.image} 
                         message={post.message} 
                         likes={post.likes} 
  />)

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.onPostChange(text);
  }

  return (
      <div>My posts
        <div className={s.addMessage}>
          <textarea value={props.newPostText} 
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