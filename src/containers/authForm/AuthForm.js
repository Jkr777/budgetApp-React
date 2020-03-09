import React, {Component} from 'react';
import { auth, removeError } from '../../redux/action_generators/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class AuthForm extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  };

  pick = (object, keys) => {
    return keys.reduce((obj, key) => {
      if (object[key]) obj[key] = object[key];
         return obj;
       }, {});
  }; 

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleForm = e => {
    e.preventDefault();
    e.persist();
    const data = this.pick(this.state, ["username", "email", "password"]);
    this.props.auth(this.props.endPoint, data)
    .then(() => {
      e.target.reset();
      this.props.history.push("/cash_flow");
    })
    .catch(() => {
      return;
    });
  };

  generateForm = () => {
    return (
      <div className="input-container">
        {this.props.endPoint === 'register' ?  
          <label htmlFor="username" className="input-container__lable"> Username
            <input 
              id="username" 
              className="input-container__input" 
              type="text" 
              onChange={this.handleChange} 
              name="username"
              value={this.state.username}
              minLength="3"
              maxLength="255"
              required={this.props.endPoint === 'register'}
            />
          </label>: null }
        <label htmlFor="name" className="input-container__lable"> Email
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
        <label htmlFor="password" className="input-container__lable"> Password
          <input 
            id="password" 
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
      </div>
    )
  };

  componentDidUpdate(prevProps) {
    if(prevProps.match.url !== this.props.match.url) {
      this.setState({username: '', password: '', email: ''});
      if(this.props.error.message) {
        this.props.removeError();     
      }
    };
    if(this.props.user.auth) {
      const { from } = this.props.location.state || { from: { pathname: '/' } };
      this.props.history.push(from)
    }
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
        <Link className="reset-link" to="/reset">Forgot password ?</Link>
      </div>
    );
  }
}

const stateToProps = state => ({
  user: state.user,
  error: state.error
});

export default connect(stateToProps, { auth, removeError })(AuthForm);