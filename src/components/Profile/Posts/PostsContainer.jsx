import Posts from './Posts'
import {addPostActionCreator, onPostChangeActionCreator} from '../../../redux/profile-reduser'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.commentsData,
    newPostElement: state.profilePage.newPostText
  }
}
let mapDispatchToPtops = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    onPostChange: (text) => {
      let action = onPostChangeActionCreator(text);
      dispatch(action);
    }
  }
}
const PostsContainer = connect(mapStateToProps, mapDispatchToPtops)(Posts);

export default PostsContainer;