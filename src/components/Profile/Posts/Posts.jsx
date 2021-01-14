import React from 'react';
import Post from './Post/Post'
import s from './Posts.module.css'


const Posts = (props) => {

  
  let coments = props.state.commentsData.map( post => <Post image={post.image} message={post.message} likes={post.likes} />)
  console.log(props.state);

  return (
      <div>My posts
        <div className={s.addMessage}>
          <textarea name="" id="" ></textarea>
          <button>Add post</button>
        </div>
        { coments }
      </div>
    )
}

export default Posts;