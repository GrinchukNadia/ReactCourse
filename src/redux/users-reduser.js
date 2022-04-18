import { followAPI, usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_FETCHING = 'SET_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

const initialStore = {
  users: [],
  totalCount: 0,
  pageSize: 99,
  activePage: 1,
  isFethcing: true,
  followingInProgress: [],
};

const usersReduser = (state = initialStore, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((el) => {
          if (el.id === action.usersId) {
            return { ...el, followed: true };
          }
          return el;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((el) => {
          if (el.id === action.usersId) {
            return { ...el, followed: false };
          }
          return el;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };

    case SET_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.activePage,
      };

    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount,
      };

    case SET_FETCHING:
      return {
        ...state,
        isFethcing: action.isFethcing,
      };

    case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.toggleFollowing
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};

export const followSucces = (usersId) => {
  return { type: FOLLOW, usersId };
};
export const unfollowSucces = (usersId) => {
  return { type: UNFOLLOW, usersId };
};
export const setUsers = (users) => {
  return { type: SET_USERS, users };
};
export const setActivePage = (activePage) => {
  return { type: SET_ACTIVE_PAGE, activePage };
};
export const setTotalUsersCount = (totalCount) => {
  return { type: SET_TOTAL_COUNT, totalCount };
};
export const setFetching = (isFethcing) => {
  return { type: SET_FETCHING, isFethcing };
};
export const setFollowingToggle = (toggleFollowing, userId) => {
  return { type: TOGGLE_FOLLOWING_PROGRESS, toggleFollowing, userId };
};

export const getUsers = (activePage, pageSize) => (dispatch) => {
  dispatch(setFetching(true));

  usersAPI.getUsers(activePage, pageSize).then((data) => {
    dispatch(setFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  });
};
export const follow = (id) => (dispatch) => {
  dispatch(setFollowingToggle(true, id));
  followAPI.deleteFollow(id).then((data) => {
    if (data.resultCode === 0) {
      dispatch(unfollowSucces(id));
    }
    dispatch(setFollowingToggle(false, id));
  });
};
export const unfollow = (id) => (dispatch) => {
  dispatch(setFollowingToggle(true, id));
  followAPI.postFollow(id).then((data) => {
    if (data.resultCode === 0) {
      dispatch(followSucces(id));
    }
    dispatch(setFollowingToggle(false, id));
  });
};

export default usersReduser;
