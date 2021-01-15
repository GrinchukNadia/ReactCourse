import React from 'react';
import Post from './Post/Post'
import s from './Posts.module.css'


const Posts = (props) => {

  let coments = 
        props.state.commentsData.map( post => <Post 
                                                image={post.image} 
                                                message={post.message} 
                                                likes={post.likes} />)

  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value ='';
  }

  return (
      <div>My posts
        <div className={s.addMessage}>
          <textarea ref={newPostElement} name="" id="" ></textarea>
          <div>
            <button onClick={addPost}>Add post</button>
          </div>
        </div>
        { coments }
      </div>
    )
}

export default Posts;