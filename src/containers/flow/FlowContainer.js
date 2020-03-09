import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get, remove, toggleCashFlow } from '../../redux/action_generators';
import FlowRow from '../../components/flow/FlowRow';
import FlowForm from './FlowForm';

class FlowContainer extends Component {
  handleClick = () => {
    if(typeof this.props.cash_flow[this.props.name][0] === 'string' ) {
      this.props.get(this.props.name);
    } else {
      this.props.toggleCashFlow(this.props.name);
    }
  };

  handleFlowDetails = () => {
    const name = this.props.name;
    if(!this.props.cash_flow[this.props.name][0]) {
      return (
        <>
          <FlowForm 
            name={this.props.name} 
          />
        </>
      )
    } else if(this.props.cash_flow[this.props.name][0]._id){
      return (
        <>
          { this.props.cash_flow[name].map(e => <FlowRow remove={this.props.remove} name={this.props.name} key={e._id} {...e}/>) }
          <FlowForm 
            name={this.props.name} 
          />
        </>
      )
    } 
  };

  render() {
    const total = `${this.props.name}_total`; 
    return (
      <section className="position-container">
      <div className={this.props.clicked === this.props.name ? "flow-container clicked" : "flow-container"} onClick={this.handleClick}>
        <span className="flow-container__title">{ this.props.name }</span>
        <span className="flow-container__total">{ this.props.cash_flow[total] || 0 } $</span>
      </div>
      { this.props.clicked === this.props.name && this.handleFlowDetails() }
      </section>
    )
  }
}

const mapStateToProps = state => ({
  cash_flow: state.cash_flow,
  clicked: state.userInteraction.cashFlowClick
});

export default connect(mapStateToProps, { get, remove, toggleCashFlow })(FlowContainer);