import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetLink, resetPassword, removeError } from '../../redux/action_generators';

class ResetForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };
 
  generateForm = () => {
    if(this.props.endPoint === 'reset link') {
      return (
        <div className="input-container">
          <label htmlFor="email" className="input-container__lable"> Email
            <input 
              id="email" 
              className="input-container__input" 
              type="email"
              onChange={this.handleChange} 
              name="email"
              value={this.state.email}
              minLength="3"
              maxLength="255"
              required 
            />
          </label>
          {this.props.interaction.resetLinkMessage && <p className="input-container__mess">{this.props.interaction.resetLinkMessage}</p>}
        </div>
      )
    } else if(this.props.endPoint === 'reset password') {
      return (
        <div className="input-container">
        <label htmlFor="email" className="input-container__lable"> New Password
          <input 
            id="passowrd" 
            className="input-container__input" 
            type="password"
            onChange={this.handleChange} 
            name="password"
            value={this.state.password}
            minLength="3"
            maxLength="255"
            required 
          />
        </label>
        {this.props.interaction.resetPassMessage && <p className="input-container__mess">{this.props.interaction.resetPassMessage}</p>}
      </div>
      )
    }  
  };

  handleForm = e => {
    e.preventDefault();
    if(this.props.endPoint === 'reset link') {
      this.props.resetLink(this.state.email);
    } else {
      this.props.resetPassword(this.state.password, this.props.match.params.token);
    };
  };

  componentWillUnmount() {
    if(this.props.error.message) {
      this.props.removeError();
    };
  };

  render() {
    return (
      <div className="form-container">
        <form className="form" onSubmit={this.handleForm}>
          <legend className="form__title">{this.props.endPoint} form</legend>
          {this.props.error.message && <p className="form__error">{this.props.error.message}</p>}
          {this.generateForm()} 
          <button className="form__btn">{this.props.endPoint}</button>
        </form>
    </div>
    )
  }
};

const mapStateToProps = state => ({
  interaction: state.userInteraction,
  error: state.error
})

export default connect(mapStateToProps, { resetLink, resetPassword, removeError })(ResetForm);