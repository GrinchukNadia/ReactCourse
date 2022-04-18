import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  setUserProfile,
  setStatus,
  updateStatus,
} from '../../redux/profile-reduser';
import Profile from './Profile';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let profileId = this.props.match.params.userId;
    if (!profileId) {
      profileId = 14450;
    }
    this.props.setUserProfile(profileId);
    this.props.setStatus(profileId)
  }

  render() {
    return <Profile {...this.props} status={this.props.status} updateStatus={this.props.updateStatus} />;
  }
}

const mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
  status: state.profilePage.profileStaus,
});

export default compose(
  connect(mapStateToProps, { setUserProfile, setStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
