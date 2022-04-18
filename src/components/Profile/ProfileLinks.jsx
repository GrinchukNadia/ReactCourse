import React from 'react';
import s from './ProfileLinks.module.css';

const Link = ({ link }) => {
  return (
    <div className={s.link}>
      <a href={link[1]}>{link[0]}</a>
    </div>
  );
};

const ProfileLinks = ({ contacts }) => {
  const links = Object.entries(contacts).filter((el) => el[1]);

  return (
    <div className={s.main}>
      <div>Profile Links</div>
      <div>
        {links.map((el) => {
          return <Link key={el[0]} link={el} />;
        })}
      </div>
    </div>
  );
};

export default ProfileLinks;
