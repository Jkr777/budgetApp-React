import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteAccount } from '../../redux/action_generators';

class UpdateForm extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  pick = (object, keys) => {
    return keys.reduce((obj, key) => {
      if (object[key]) obj[key] = object[key];
         return obj;
       }, {});
  }; 

  handleSubmit = e => {
    e.preventDefault();
    const data = this.pick(this.state, ["username", "email", "password"]);
    this.props.editProfile(data);
  };

  handleDelete = () => {
    this.props.deleteAccount();
  };

  render() {
    return (
      <form className="profile-form" onSubmit={this.handleSubmit}>
        <input 
          name="username"
          placeholder="username"
          type="text"
          minLength="3"
          maxLength="255"
          className="profile-form__input"
          onChange={this.handleChange}
        />
        <input 
          name="email"
          placeholder="email"
          type="text"
          minLength="3"
          maxLength="255"
          className="profile-form__input"
          onChange={this.handleChange}
        />
        <input 
          name="password"
          placeholder="password"
          type="password"
          minLength="3"
          maxLength="255"
          className="profile-form__input"
          onChange={this.handleChange}
        />
        <div className="profile-form__btn-container">
          <button className="profile-form__btn">Update</button>
          <Link to="/" className="profile-form__btn--del" onClick={this.handleDelete}>Delete your account</Link>
        </div>
      </form>
    )
  }
}

export default connect(null, { deleteAccount })(UpdateForm);