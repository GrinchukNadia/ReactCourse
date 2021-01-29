import React from 'react';
import Users from './Users';
import {followAC, unfollowAC, setUsersAC, activePageAC, totalCountAC} from './../../redux/users-reduser';
import { connect } from 'react-redux';
import * as axios from 'axios';
import preloader from './../../img/30.gif'

class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setActivePage(pageNumber);
        
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        
        return <>
            <div style={{position: absolute;}}>
                {this.props.isFethcing ? <img src={preloader} alt="" /> : null}
            </div>
            <Users
                usersTotalCount={this.props.usersTotalCount}
                pageSize={this.props.pageSize}
                activePage={this.props.activePage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                onPageChanged={this.onPageChanged} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersTotalCount: state.usersPage.totalCount,
        activePage: state.usersPage.activePage,
        isFethcing: state.usersPage.isFethcing
    }
}
let mapDispatchToPtops = (dispatch) => {
    return {
        follow: (usersId) => {
            dispatch(followAC(usersId));
        },
        unfollow: (usersId) => {
            dispatch(unfollowAC(usersId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setActivePage: (id) => {
            dispatch(activePageAC(id))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(totalCountAC(totalCount))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToPtops)(UsersContainer);

