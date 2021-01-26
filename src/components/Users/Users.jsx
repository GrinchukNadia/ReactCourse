import React from 'react';
import style from './Users.module.css';

const Users = (props) => {
    return(
        <div className={style.body}>
           {
               props.users.map(el => {
                   return (
                    <div className={style.container}>
                        <div className={style.imgStatus}>
                            <div>
                                <img className={style.image} src={el.img} alt=""/>
                            </div>
                            <div>
                                <button className={style.button}>{el.followed ? "Unfollow" : "Follow"}</button>
                            </div>
                        </div>
                        <div className={style.usersInfo}>
                            <div>
                                <div className={`${style.mrgBottom} ${style.name}`}>
                                    {el.name}
                                </div>
                                <div>
                                    {el.status}
                                </div>
                            </div>
                            <div>
                                <div className={style.mrgBottom}>
                                    {el.location.city}, { el.location.country}
                                </div>
                            </div>
                        </div>
                    </div>
                   )
               })
           }
        </div>
    )
}

export default Users;