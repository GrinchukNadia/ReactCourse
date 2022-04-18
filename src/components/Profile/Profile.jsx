import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo';
import ProfileLinks from './ProfileLinks';

const Profile = (props) => {
  if (!props.userProfile) {
    return null;
  }

  return (
    <div className={s.main}>
      <ProfileLinks contacts={props.userProfile.contacts} />
      <ProfileInfo
        profileInfo={props.userProfile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
    </div>
  );
};

export default Profile;
