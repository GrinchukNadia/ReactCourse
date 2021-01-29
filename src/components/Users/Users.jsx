import React from 'react';
import style from './Users.module.css';
import avatarPattern from './../../img/avatar-pattern.jpg';

let Users = (props) => {
    
    let totalPageCount = Math.ceil(props.usersTotalCount / props.pageSize);
    let pages =[];
    for(let i=1; i <= totalPageCount; i++){
        pages.push(i);
    }

    return(
        <div className={style.usersBlock}>
            <div className={style.pagesCount}>
                {pages.map(el => {
                    return <div className={props.activePage === el && style.active} 
                        onClick={(e) => {props.onPageChanged(el) }}>{el}</div>
                })
                }
            </div>
            <div className={style.body}>
                {props.users.map(el => {
                    return (
                        <div key={el.id} className={style.container}>
                            <div className={style.imgStatus}>
                                <div>
                                    <img className={style.image} src={el.photos.small != null ? el.photos.small : avatarPattern } alt=""/>
                                </div>
                                <div>
                                    {el.followed ? 
                                        <button className={style.button} onClick={ () => {props.unfollow(el.id)} }>Unfollow</button> : 
                                        <button className={style.button} onClick={ () => {props.follow(el.id)} }>Follow</button>
                                    } 
                                </div>
                            </div>
                            <div className={style.usersInfo}>
                                <div className={style.nameStatus}>
                                    <div className={`${style.mrgBottom} ${style.name}`}>
                                        {el.name}
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        {el.status}
                                    </div>
                                    <div className={style.mrgBottom}>
                                        <p className={style.location}>{"el.location.city"},</p> 
                                        <p className={style.location}>{" el.location.country"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>      
        </div>
    )
}

export default Users;