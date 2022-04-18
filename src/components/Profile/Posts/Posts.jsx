import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';


const Posts = (props) => {
  let coments = props.posts.map( post => <Post key={post.id}  image={post.image} message={post.message} likes={post.likes} />)

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = (event) => {
    let text = event.target.value;
    props.onPostChange(text);
  }

  return (
      <div>My posts
        <div className={s.addMessage}>
          <textarea value={props.newPostElement} 
                    onChange={onPostChange}
                    name="" id="" />
          <div>
            <button className={s.button} onClick={addPost}>Add post</button>
          </div>
        </div>
        { coments }
      </div>
    )
}

export default Posts;