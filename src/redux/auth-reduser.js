import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

const initialStore = { userId: null, email: null, login: null, isAuth: false };

const authReduser = (state = initialStore, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: { userId, email, login },
});

export const autorise = () => (dispatch) => {
  authAPI.getAuthUserData().then((data) => {
    if (data.resultCode === 0) {
      const { id, email, login } = data.data;
      dispatch(setAuthUserData(id, email, login));
    }
  });
};

export default authReduser;
