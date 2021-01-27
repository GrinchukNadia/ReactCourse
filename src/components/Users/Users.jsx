import React from 'react';
import style from './Users.module.css';
import avatarPattern from './../../img/avatar-pattern.jpg';
import dania from './../../img/friends/dania.jpg';
import luba from './../../img/friends/luba.jpg';
import * as axios from 'axios';

const Users = (props) => {
    
    if (props.users.length === 0) {
        debugger
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
            props.setUsers(response.data.items);
            console.log(response);
        })
        // props.setUsers(
        //     [
        //      { 
        //         id: 1, 
        //         name: "Elia", 
        //         followed: true, 
        //         img: elia, 
        //         status: "Super exited", 
        //         location: { city: "Kiev", country: "Ukraine"} 
        //      },
        //      {
        //         id: 2, 
        //         name: "Dania", 
        //         followed: false, 
        //         img: dania, 
        //         status: "Exited", 
        //         location: { city: "Moscow", country: "Russia"} 
        //      },
        //      {
        //         id: 3, 
        //         name: "Luba", 
        //         followed: true, 
        //         img: luba, 
        //         status: "Super", 
        //         location: { city: "Minsk", country: "Belarus"} 
        //      }
        //     ]
        // )
    }

    return(
        <div className={style.body}>
           {
               props.users.map(el => {
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
                                    <p>{"el.location.city"},</p> 
                                    <p>{" el.location.country"}</p>
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