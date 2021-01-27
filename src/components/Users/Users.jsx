import React from 'react';
import style from './Users.module.css';
import avatarPattern from './../../img/avatar-pattern.jpg';
import * as axios from 'axios';

class Users extends React.Component {
    constructor(props) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
            this.props.setUsers(response.data.items);
            console.log(response);
        })
    }
    render() {
        return(
            <div className={style.body}>
                {this.props.users.map(el => {
                    return (
                        <div key={el.id} className={style.container}>
                            <div className={style.imgStatus}>
                                <div>
                                    <img className={style.image} src={el.photos.small != null ? el.photos.small : avatarPattern } alt=""/>
                                </div>
                                <div>
                                    {el.followed ? 
                                        <button className={style.button} onClick={ () => {this.props.unfollow(el.id)} }>Unfollow</button> : 
                                        <button className={style.button} onClick={ () => {this.props.follow(el.id)} }>Follow</button>
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
                })}
            </div>
        )
    }
}

export default Users;