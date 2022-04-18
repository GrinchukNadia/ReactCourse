import { profileAPI } from './../api/api';

const ADD_POST = 'ADD-POST';
const ON_POST_CHAGE = 'ON-POST-CHANGE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialStore = {
  commentsData: [
    // {
    //   image:
    //     'https://cs7.pikabu.ru/post_img/big/2018/10/20/9/154004999513599819.jpg',
    //   message: 'Всем привет. Я тут новенький',
    //   likes: '45',
    //   id: 1219,
    // },
    // {
    //   image:
    //     'https://i.pinimg.com/originals/04/a8/73/04a87347b071ec062a586e02c23f6221.png',
    //   message: 'Вчера видел классный сайт. Го обсуждать :D😁',
    //   likes: '5',
    //   id: 1218,
    // },
    // {
    //   image:
    //     'https://i2.wp.com/gubdaily.ru/wp-content/uploads/2019/07/02-2.jpg?fit=1000%2C576&ssl=1',
    //   message: 'Кто знает в чем может быть проблема ☹',
    //   likes: '23',
    //   id: 1217,
    // },
    // {
    //   image:
    //     'https://cdn141.picsart.com/326383677140211.png?type=webp&to=min&r=640',
    //   message: 'Что не так с этим миром?',
    //   likes: '827',
    //   id: 1216,
    // },
    // {
    //   image:
    //     'https://i.pinimg.com/originals/02/29/cf/0229cf00478ba83e641dfd23ef0339c5.png',
    //   message: 'ААААААААААААААААААААААААААААААААААААААА',
    //   likes: '10M',
    //   id: 1215,
    // },
    {
      image:
        'https://i.pinimg.com/736x/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64--youtube.jpg',
      message: 'НЕ НАДО ТАК МНОГО ЛАЙКОВ',
      likes: '10M',
      id: 1214,
    },
  ],
  newPostText: '',
  userProfile: null,
  profileStaus: '',
};

const profileReduser = (state = initialStore, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        image:
          'https://i.pinimg.com/736x/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64--youtube.jpg',
        message: state.newPostText,
        likes: 0,
      };

      return {
        ...state,
        commentsData: [...state.commentsData, newPost],
        newPostText: '',
      };

    case ON_POST_CHAGE:
      return {
        ...state,
        newPostText: action.text,
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.userProfile,
      };

    case SET_USER_STATUS:
      return {
        ...state,
        profileStaus: action.profileStaus,
      };

    default:
      return state;
  }
};

export let addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};
export let onPostChangeActionCreator = (text) => {
  return {
    type: ON_POST_CHAGE,
    text: text,
  };
};
export const userProfileAC = (userProfile) => {
  return { type: SET_USER_PROFILE, userProfile };
};
export const setStatusAC = (profileStaus) => {
  return { type: SET_USER_STATUS, profileStaus };
};

export const setUserProfile = (profileId) => (dispatch) => {
  profileAPI.getProfile(profileId).then((data) => {
    dispatch(userProfileAC(data));
  });
};
export const setStatus = (id) => (dispatch) => {
  profileAPI.getStatus(id).then((data) => {
    dispatch(setStatusAC(data.data));
  });
};
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatusAC(status));
    }
  });
};

export default profileReduser;
