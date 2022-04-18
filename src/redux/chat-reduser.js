const ADD_MESSAGE = 'ADD-MESSAGE';
const ON_MESSAGE_CHANGE = 'ON-MESSAGE-CHANGE';

let initialStore = {
  friendsData: [
    {
      id: '1',
      name: 'Elia',
      img: 'https://avatarfiles.alphacoders.com/791/79102.png',
    },
    {
      id: '2',
      name: 'Dania',
      img: 'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png',
    },
    {
      id: '3',
      name: 'Luba',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY9CFeq9b0Heyu5smWdzciVy8mSgdQptD0NQ&usqp=CAU',
    },
    {
      id: '4',
      name: 'Olia',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW1GkpwvZRMf59wKi6x4GQQdU4goJaObA5Hw&usqp=CAU',
    },
    {
      id: '5',
      name: 'Mom',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN15Fc123gzwhYHcZ9fwgqfvSBdvk0uM-0yQ&usqp=CAU',
    },
    {
      id: '6',
      name: 'Dad',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzwyqpjAmQf9cJZJYedogG6ivGM_FAyiIOwQ&usqp=CAU',
    },
    {
      id: '7',
      name: 'Nadia',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMpUS3NxMp4i7QkSKNn40Oax_w-mLBFsoPA&usqp=CAU',
    },
  ],

  messageData: [
    { text: 'Hi. How are you? Luba', person: 'friend' },
    { text: 'Was playing all the day', person: 'me' },
    { text: 'When will you go to sleep?', person: 'friend' },
    { text: 'Late', person: 'me' },
    { text: 'Why so?', person: 'friend' },
    { text: "Don't you want to sleep?", person: 'friend' },
    { text: "I'll be playing new game", person: 'me' },
  ],
  newMessage: '',
};

const chatReduser = (state = initialStore, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let text = state.newMessage;
      return {
        ...state,
        newMessage: '',
        messageData: [...state.messageData, { text: text, person: 'me' }],
      };

    case ON_MESSAGE_CHANGE:
      return { ...state, newMessage: action.text };

    default:
      return state;
  }
};

export let addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};
export let onMessageChangeActionCreator = (text) => {
  return {
    type: ON_MESSAGE_CHANGE,
    text: text,
  };
};

export default chatReduser;
