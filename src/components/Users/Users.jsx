import React from 'react';
import style from './Users.module.css';
import Pagination from './Pagination';
import UserCard from './UserCard';

let Users = (props) => {
  let totalPageCount = Math.ceil(props.usersTotalCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= totalPageCount; i++) {
    pages.push(i);
  }

  return (
    <div className={style.usersBlock}>
      <Pagination pages={pages} onPageChanged={props.onPageChanged} />
      <div className={style.body}>
        {props.users.map((el) => (
          <UserCard
            key={el.id}
            el={el}
            unfollow={props.unfollow}
            follow={props.follow}
            followingInProgress={props.followingInProgress}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
