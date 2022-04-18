import React from 'react';
import PostsContainer from './Posts/PostsContainer';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import avatar from './../../img/avatar-pattern.jpg';

const ProfileInfo = ({ profileInfo, status, updateStatus }) => {
  return (
    <div className={s.main}>
      <div className={s.name}>{profileInfo.fullName}</div>
      <div className={s.info}>
        <div>
          <img src={profileInfo.photos.large || avatar}></img>
        </div>
        <div className={s.aboutMe}>
          <div>
            <span>About me</span>
            <div>{profileInfo.aboutMe}</div>
          </div>
          <br />
          <br />
          <br />
          <div>
            <span>Status</span>
            <ProfileStatus status={status} updateStatus={updateStatus} />
          </div>
        </div>
      </div>
      <PostsContainer />
    </div>
  );
};

export default ProfileInfo;
