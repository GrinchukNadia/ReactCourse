import React from 'react';
import style from './Users.module.css';

let Pagination = (props) => {
  return (
    <div className={style.pagesCount}>
      {props.pages.map((el) => {
        return (
          <div
            key={el}
            className={props.activePage === el ? style.active : undefined}
            onClick={(e) => {
              props.onPageChanged(el);
            }}
          >
            {el}
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
