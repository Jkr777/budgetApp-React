import React from 'react';
import Flow from '../../img/flow.svg';
import History from '../../img/history.svg';
import Bill from '../../img/bills.svg';

const HomeMiddle = () => (
  <section className="middle-container">
    <div className="cart">
      <h2>Cash Flow</h2>
      <img src={Flow} alt="cash flow" className="cart__img" />
      <p>Tracing the changes in your cash flow will help you to manage your finances better.</p>
    </div>
    <div className="cart">
      <h2>Compare History</h2>
      <img src={History} alt="history" className="cart__img" />
      <p>Compare your monthly progress and make an efficient plan for the future.</p>
    </div>
    <div className="cart">
      <h2>Manage your bills</h2>
      <img src={Bill} alt="bill" className="cart__img" />
      <p>Add new liabilities and assets.</p>
    </div>
  </section>
);

export default HomeMiddle;