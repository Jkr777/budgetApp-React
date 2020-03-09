import React from 'react';
import { Link } from 'react-router-dom';

const HomeTop = () => (
  <section className="top-container">
    <div className="top-container__align">
      <h1 className="top-container__title">Take control over your finances</h1>
      <p className="top-container__text">Whether you want to track your spending, make a budget or lower your bills, with Budget App you can spend more time living, while staying on top of your finances.</p>
      <Link to="/register"><button className="top-container__button">Register</button></Link>
    </div>
  </section>
);

export default HomeTop;