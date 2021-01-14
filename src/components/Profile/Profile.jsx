import React from 'react';
import s from './Profile.module.css'
import Posts from './Posts/Posts'

const Profile = (props) => {



    return (
      <main className={s.main}>

      <div className={s.imageBanner}>
        <img src="https://www.freewebheaders.com/wp-content/gallery/birds/cute-chicks-on-green-background-header.jpg"></img>
      </div>

      <div>
        ava + description
      </div>

      <Posts state={props.state} />

    </main>
    )
}

export default Profile;