import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
      <div className={s.comments}>
        <div className={s.message}>
          <img src={props.image} alt=""/>
          <div className={s.textMessage}>
            {props.message}
          </div>
        </div>
        <div>
          {props.likes} Likes
        </div>
      </div>
    )
}

export default Post;