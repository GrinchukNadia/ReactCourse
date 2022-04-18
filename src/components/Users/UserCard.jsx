import React from 'react';
import style from './Users.module.css';
import avatarPattern from './../../img/avatar-pattern.jpg';
import { NavLink } from 'react-router-dom';

let UserCard = (props) => {
  return (
    <div className={style.container}>
      <div className={style.imgStatus}>
        <div>
          <img
            className={style.image}
            src={
              props.el.photos.small != null
                ? props.el.photos.small
                : avatarPattern
            }
            alt=''
          />
        </div>
        <div className={style.buttons}>
          {props.el.followed ? (
            <button
              className={style.button}
              disabled={props.followingInProgress.some(
                (id) => id === props.el.id
              )}
              onClick={() => {
                props.follow(props.el.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              className={style.button}
              disabled={props.followingInProgress.some(
                (id) => id === props.el.id
              )}
              onClick={() => {
                props.unfollow(props.el.id);
              }}
            >
              Follow
            </button>
          )}
          <NavLink to={`/profile/${props.el.id}`}>
            <button className={style.button}>profile</button>
          </NavLink>
        </div>
      </div>
      <div className={style.usersInfo}>
        <div className={style.nameStatus}>
          <div className={`${style.mrgBottom} ${style.name}`}>
            {props.el.name}
          </div>
        </div>
        <div>
          <div>{props.el.status}</div>
          <div className={style.mrgBottom}>
            <p className={style.location}>{'props.el.location.city'}</p>
            <p className={style.location}>{' props.el.location.country'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
