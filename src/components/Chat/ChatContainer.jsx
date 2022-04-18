import { connect } from 'react-redux';
import {
  addMessageActionCreator,
  onMessageChangeActionCreator,
} from '../../redux/chat-reduser';
import Chat from './Chat';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    messageData: state.chatPage.messageData,
    newMessage: state.chatPage.newMessage,
    friendsData: state.chatPage.friendsData,
  };
};
let mapDispatchToPtops = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    onMessageChange: (text) => {
      let action = onMessageChangeActionCreator(text);
      dispatch(action);
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToPtops),
  withAuthRedirect
)(Chat);
