import React from 'react';
import style from './Users.module.css';
import elia from './../../img/friends/elia.jpg';
import dania from './../../img/friends/elia.jpg';
import luba from './../../img/friends/elia.jpg';

const Users = (props) => {
    
    if (props.users.length === 0) {
        props.setUsers(
            [
             { 
                id: 1, 
                name: "Elia", 
                followed: true, 
                img: elia, 
                status: "Super exited", 
                location: { city: "Kiev", country: "Ucraine"} 
             },
             {
                id: 2, 
                name: "Dania", 
                followed: false, 
                img: dania, 
                status: "Exited", 
                location: { city: "Moscow", country: "Russia"} 
             },
             {
                id: 3, 
                name: "Luba", 
                followed: true, 
                img: luba, 
                status: "Super", 
                location: { city: "Minsk", country: "Belarus"} 
             }
            ]
        )
    }

    return(
        <div className={style.body}>
           {
               props.users.map(el => {
                   return (
                    <div key={el.id} className={style.container}>
                        <div className={style.imgStatus}>
                            <div>
                                <img className={style.image} src={el.img} alt=""/>
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