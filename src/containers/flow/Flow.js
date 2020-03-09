import React, { PureComponent } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import FlowTop from '../../components/flow/FlowTop';
import FlowContainer from './FlowContainer';

class Flow extends PureComponent {
  render() {
    const { cash_flow, error } = this.props;
    const m = moment(cash_flow.date).format('MMMM');
    return (
      <React.Fragment>
        <FlowTop 
          total={cash_flow.total}
          date={m}
          error={error}
        />
        <FlowContainer 
          name="assets"
          different={true}
        />
        <FlowContainer 
          name="liabilities"
        />
        <FlowContainer 
          name="earnings"
          different={true}
        />
        <FlowContainer 
          name="spendings"
        />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  cash_flow: state.cash_flow,
  error: state.error
});

export default connect(mapStateToProps)(Flow);