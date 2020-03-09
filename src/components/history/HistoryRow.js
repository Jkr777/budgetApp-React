import React from 'react';
import moment from 'moment';

const HistoryRow = ({ total, date }) => (
  <div className="history-row">
    <span className="history-row__date">{ moment(date).format('MMM Do') }</span>
    <span className="history-row__amount">{ total } $</span>
  </div>
);

export default HistoryRow;