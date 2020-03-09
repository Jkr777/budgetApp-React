import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newFlowElement, removeError } from '../../redux/action_generators';
import plus from '../../img/plus.svg';

class FlowForm extends Component {
  state = {
    title: '',
    description: '',
    amount: '',
    clicked: false
  };

  handleClick = () => {
    this.setState(prevState => ({
      clicked: !prevState.clicked
    }))
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

  handleSubmit = e => {
    e.preventDefault();
    const data = this.pick(this.state, ["title", "description", "amount"]);
    const endpoint = this.props.name;
    this.props.newFlowElement(endpoint, data);
    this.setState({ clicked: false });
  };

  componentWillUnmount() {
    if(this.props.error.message) {
      this.props.removeError()
    }
  };

  render() {
    return (
      <div className="flow-form-container">
        <span onClick={this.handleClick} ><img src={plus} alt="plus sign"/> add {this.props.name} </span>
        {this.state.clicked ? (
        <form className="flow-form" onSubmit={this.handleSubmit}>
          <input 
            className="flow-form__input"
            type="text" 
            name="title"
            placeholder="Title" 
            onChange={this.handleChange}
            minLength="2"
            maxLength="15"
          />
          <input 
            className="flow-form__input"
            type="text"
            name="description"
            placeholder="Description" 
            onChange={this.handleChange}
          />
          <input 
            className="flow-form__input"
            type="number"
            name="amount"
            placeholder="Amount"
            min="0"
            onChange={this.handleChange}
            required
          />
          <div className="flow-form__btn-container">
            <button className="flow-form__btn add">Add</button>
            <button className="flow-form__btn" onClick={this.handleClick}>Cancel</button>
          </div>
        </form>) : null }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  error: state.error
});

export default connect(mapStateToProps, { newFlowElement, removeError })(FlowForm);