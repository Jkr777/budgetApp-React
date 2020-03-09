import React, { Component } from 'react';
import { connect } from 'react-redux';
import UpdateForm from './UpdateForm';
import { editProfile, removeError } from '../../redux/action_generators';

class Profile extends Component {
  componentWillUnmount() {
    if(this.props.error) {
      this.props.removeError();
    }
  };

  render() {
    return (
      <section className="profile-container">
        <p className="profile-container__username">Welcome {this.props.user.username}</p>
        <hr className="flow-top__hr"/>
        { this.props.error && <p className="profile-container__error">{this.props.error.message}</p> }
        <UpdateForm
          editProfile={this.props.editProfile}
        />
      </section>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  error: state.error.message
});

export default connect(mapStateToProps, { editProfile, removeError })(Profile);