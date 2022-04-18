import React from 'react';
import Users from './Users';
import {
  follow,
  unfollow,
  setActivePage,
  getUsers,
} from './../../redux/users-reduser';
import { connect } from 'react-redux';
import preloader from './../../img/30.gif';
import s from './UsersContainer.module.css';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.activePage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        <div className={s.user__container}>
          {this.props.isFethcing ? <img src={preloader} alt='' /> : null}
        </div>
        <Users
          usersTotalCount={this.props.usersTotalCount}
          pageSize={this.props.pageSize}
          activePage={this.props.activePage}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          followingInProgress={this.props.followingInProgress}
          onPageChanged={this.onPageChanged}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    usersTotalCount: state.usersPage.totalCount,
    activePage: state.usersPage.activePage,
    isFethcing: state.usersPage.isFethcing,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setActivePage,
    getUsers,
  }),
)(UsersContainer);

// let mapDispatchToPtops = (dispatch) => {
//     return {
//         follow: (usersId) => {
//             dispatch(followAC(usersId));
//         },
//         unfollow: (usersId) => {
//             dispatch(unfollowAC(usersId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setActivePage: (id) => {
//             dispatch(activePageAC(id))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(totalCountAC(totalCount))
//         },
//         setFetching: (isFethcing) => {
//             dispatch(setFetchingAC(isFethcing));
//         }
//     }
// }
