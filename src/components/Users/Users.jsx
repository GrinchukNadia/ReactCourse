import React from 'react';
import style from './Users.module.css';
import avatarPattern from './../../img/avatar-pattern.jpg';
import * as axios from 'axios';

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
            console.log(response);
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setActivePage(pageNumber);
        
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                console.log(response);
            });
    }

    render() {
        let totalPageCount = Math.ceil(this.props.usersTotalCount / this.props.pageSize);
        let pages =[];
        for(let i=1; i <= totalPageCount; i++){
            pages.push(i);
        }

        return(
            <div >
                <div className={style.pagesCount}>
                    {pages.map(el => {
                        return <div className={this.props.activePage === el && style.active} 
                            onClick={(e) => {this.onPageChanged(el) }}>{el}</div>
                    })
                    }
                </div>
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
            </div>
        )
    }
}

export default Users;