import React from 'react';
import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  onActivate = () => {
    this.setState({
      editMode: true,
    });
  };
  onDeactivate = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (e) => {
    const status = e.target.value;
    this.setState({status})
  };

  componentDidUpdate = (prevProps, prevStatus) => {
    if(prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
      <div className={s.status}>
        {this.state.editMode ? (
          <div>
            <input
              autoFocus={true}
              onBlur={this.onDeactivate}
              className={s.status__edit}
              value={this.state.status}
              onChange={this.onStatusChange}
            />
          </div>
        ) : (
          <div className={s.statuse__text} onDoubleClick={this.onActivate}>
            {this.state.status || '-----------'}
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
