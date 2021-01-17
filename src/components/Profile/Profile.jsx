import React from 'react';
import s from './Profile.module.css'
import Posts from './Posts/Posts'

const Profile = (props) => {



    return (
      <main className={s.main}>

      <div className={s.imageBanner}>
        <img src="https://i.pinimg.com/originals/d6/d1/97/d6d19793de569671e2e67496f246b3b5.jpg"></img>
      </div>

      <div>
        ava + description
      </div>

      <Posts addPost={props.addPost} onPostChange={props.onPostChange} profilePage={props.profilePage.commentsData} newPostText={props.profilePage.newPost} />

    </main>
    )
}

export default Profile;