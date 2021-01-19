const ADD_POST = "ADD-POST";
const ON_POST_CHAGE =  "ON-POST-CHANGE";

const profileReduser = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                  image: "https://i.pinimg.com/736x/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64--youtube.jpg",
                  message: state.newPost,
                  likes: 0};
          
            state.commentsData.push(newPost);
            state.newPost = "";
            return state;

        case ON_POST_CHAGE:  
            state.newPost = action.text;
            return state;

        default:
            return state;
    }
}

export let addPostActionCreator = () => {
    return {
      type: ADD_POST
    }
  }
  
export let onPostChangeActionCreator = (text) => {
    return {
      type: ON_POST_CHAGE, 
      text: text
    }
  }

export default profileReduser;