import React from 'react';

const FlowTop = ({ total, date, error }) => (
  <>
    <div className="flow-top">
      <span className="flow-top__total">{ total ? total: 0 } $</span>
      <hr className="flow-top__hr"/>
      <span className="flow-top__date">{ date } cash flow </span>
    </div>
    { error.message && <p className="flow-error">{ error.message }</p> }
  </>
);

export default FlowTop;