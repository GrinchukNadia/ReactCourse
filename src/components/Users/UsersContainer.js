import React from 'react';
import Users from './Users';
import {followAC, unfollowAC, setUsersAC} from './../../redux/users-reduser';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToPtops)(Users);

export default UsersContainer;