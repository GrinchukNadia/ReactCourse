import React from 'react';
import Post from './Post/Post'
import s from './Posts.module.css'

const Posts = (props) => {

debugger; 
  let coments = props.state.commentsData.map( post => <Post  image={post.image} message={post.message} likes={post.likes} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({type: "ADD-POST"});
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({type: "ON-POST-CHAGE", text: text});
  }

  return (
      <div>My posts
        <div className={s.addMessage}>
          <textarea value={props.state.newPost} 
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