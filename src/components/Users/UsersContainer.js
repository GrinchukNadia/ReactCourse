// import React from 'react';
import Users from './Users';
import {followAC, unfollowAC, setUsersAC, activePageAC} from './../../redux/users-reduser';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersTotalCount: state.usersPage.totalCount,
        activePage: state.usersPage.activePage
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
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToPtops)(Users);

export default UsersContainer;