const ADD_MESSAGE = "ADD-MESSAGE";
const ADD_POST = "ADD-POST";
const ON_MESSAGE_CHANGE = "ON-MESSAGE-CHANGE";
const ON_POST_CHAGE =  "ON-POST-CHANGE";

let store = {
  _state: {
    profilePage: {
        commentsData: [
          {image: "https://cs7.pikabu.ru/post_img/big/2018/10/20/9/154004999513599819.jpg", message: "Всем привет. Я тут новенький", likes: "45"},
          {image: "https://i.pinimg.com/originals/04/a8/73/04a87347b071ec062a586e02c23f6221.png", message: "Вчера видел классный сайт. Го обсуждать :D😁", likes: "5"},
          {image: "https://i2.wp.com/gubdaily.ru/wp-content/uploads/2019/07/02-2.jpg?fit=1000%2C576&ssl=1", message: "Кто знает в чем может быть проблема ☹", likes: "23"},
          {image: "https://cdn141.picsart.com/326383677140211.png?type=webp&to=min&r=640", message: "Что не так с этим миром?", likes: "827"},
          {image: "https://i.pinimg.com/originals/02/29/cf/0229cf00478ba83e641dfd23ef0339c5.png", message: "ААААААААААААААААААААААААААААААААААААААА", likes: "10M"},
          {image: "https://i.pinimg.com/736x/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64--youtube.jpg", message: "НЕ НАДО ТАК МНОГО ЛАЙКОВ", likes: "10M"} 
                      ],
        newPost: "" 
    },
    chatPage: {
        friendsData: [
          {id: "1", name: "Elia", img: "https://avatarfiles.alphacoders.com/791/79102.png" },
          {id: "2", name: "Dania", img: "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"},
          {id: "3", name: "Luba", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY9CFeq9b0Heyu5smWdzciVy8mSgdQptD0NQ&usqp=CAU"},
          {id: "4", name: "Olia", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW1GkpwvZRMf59wKi6x4GQQdU4goJaObA5Hw&usqp=CAU"},
          {id: "5", name: "Mom", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN15Fc123gzwhYHcZ9fwgqfvSBdvk0uM-0yQ&usqp=CAU"},
          {id: "6", name: "Dad", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzwyqpjAmQf9cJZJYedogG6ivGM_FAyiIOwQ&usqp=CAU"},
          {id: "7", name: "Nadia", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMpUS3NxMp4i7QkSKNn40Oax_w-mLBFsoPA&usqp=CAU"}
                     ],
        
        messageData: [ 
          {text: "Hi. How are you? Luba", person: 'friend'},
          {text: "Was playing all the day", person: 'me'},
          {text: "When will you go to sleep?", person: 'friend'},
          {text: "Late", person: 'me'},
          {text: "Why so?", person: 'friend'},
          {text: "Don't you want to sleep?", person: 'friend'},
          {text: "I'll be playing new game", person: 'me'}
                      ],
        newMessage: ""
    }
  },
   
  _callSubscriber() {
    console.log("State changed");
  },

  updateDom(observer) {
    this._callSubscriber = observer;
  },
 
  getState() {
    return this._state
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
            image: "https://i.pinimg.com/736x/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64--youtube.jpg",
            message: this._state.profilePage.newPost,
            likes: 0};
    
      this._state.profilePage.commentsData.push(newPost);
      this._state.profilePage.newPost = "";
      this._callSubscriber(this._state);    
    } 
    else if (action.type === ON_POST_CHAGE) {
      this._state.profilePage.newPost = action.text;
      this._callSubscriber(this._state);
    }
    else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        text: this._state.chatPage.newMessage,
        person: "me"};

      this._state.chatPage.messageData.push(newMessage);
      this._state.chatPage.newMessage = "";
      this._callSubscriber(this._state);

    }
    else if (action.type === ON_MESSAGE_CHANGE) {
      this._state.chatPage.newMessage = action.text;
      this._callSubscriber(this._state);
    }
  }

}

let addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}

let onPostChangeActionCreator = (text) => {
  return {
    type: ON_POST_CHAGE, 
    text: text
  }
}

let addMessageActionCreator = () => {
  return {
      type: ADD_MESSAGE
  }
}
let onMessageChangeActionCreator = (text) => {
  return {
      type: ON_MESSAGE_CHANGE,
      text: text
  }
}

export {addMessageActionCreator};
export {onMessageChangeActionCreator};
export {onPostChangeActionCreator};
export {addPostActionCreator};
export default store;