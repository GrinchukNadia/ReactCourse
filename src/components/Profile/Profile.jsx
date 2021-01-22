import React from 'react';
import s from './Profile.module.css'
import PostsContainer from './Posts/PostsContainer'

const Profile = (props) => {
;


    return (
      <main className={s.main}>

      <div className={s.imageBanner}>
        <img src="https://i.pinimg.com/originals/d6/d1/97/d6d19793de569671e2e67496f246b3b5.jpg"></img>
      </div>

      <div>
        ava + description
      </div>

      <PostsContainer />
    </main>
    )
}

export default Profile;