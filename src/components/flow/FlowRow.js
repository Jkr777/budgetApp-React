import React from 'react';
import trash from '../../img/Icon Trash.svg';
import moment from 'moment';

const FlowRow = ({ name, title, amount, description, date, _id, remove }) => (
  <>
  {name === "assets" || name === "liabilities" ?  (
  <div className="flow-row">
    <div className="flow-row__title--amount">{ title } <span className="flow-row__amount">{ amount || 0 } $</span></div>
    <span className="flow-row__description">{ description }</span>
    <img 
      className="flow-row__img" 
      onClick={() => remove(name, _id, amount)}
      src={ trash } 
      alt="trash bean"
    />
  </div>) : (
    <div className="flow-row--2">
      <div className="flow-row--2__title--date">{ title } 
        <span className="flow-row--2__date"> {moment(date).format('MMM Do')} </span>
      </div>
        <span className="flow-row__description">{ description }</span>
        <span>{ amount || 0 } $</span>
    </div>
  )}
  </>
);

export default FlowRow;