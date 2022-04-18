import React from 'react';
import Header from './Header';
import { autorise } from './../../redux/auth-reduser';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.autorise();
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { autorise })(HeaderContainer);
