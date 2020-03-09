import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHistory } from '../../redux/action_generators';
import HistoryRow from '../../components/history/HistoryRow';

class History extends Component {
  state = {
    clicked: false
  };

  handleClick = () => {
    this.setState(prevState => ({
      clicked: !prevState.clicked
    }));    
  };

  componentDidMount() {
    this.props.getHistory()
  };

  componentWillUnmount() {
    if(this.props.error) {
      this.props.removeError();
    }
  };

  render() {
    return (
      <section className="history-container">
        { this.props.error && <p className="history-container__error">{this.props.error.message}</p> }
        <div className={this.state.clicked ? "history-container--normal clicked" : "history-container--normal"} onClick={this.handleClick}>
          <span className="history-container__title">cash flow history</span>
        </div>
        {this.state.clicked ? this.props.history.map(e => <HistoryRow {...e} key={e._id} />) : null}
      </section>
    )
  }
}

const stateToProps = state => ({
  history: state.history,
  error: state.error.message
});

export default connect(stateToProps, { getHistory })(History);