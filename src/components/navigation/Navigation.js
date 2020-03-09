import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({ auth, logOut, cssClass }) => {
  if(auth) {
    return (
      <div className={cssClass}>
        <NavLink to="/profile" className="nav__link" activeClassName="nav__link--active" exact>Profile</NavLink>
        <NavLink to="/cash_flow" className="nav__link" activeClassName="nav__link--active" exact>Cash Flow</NavLink>
        <NavLink to="/history" className="nav__link" activeClassName="nav__link--active" exact>History</NavLink>
        <NavLink to="/" className="nav__link" onClick={logOut}>Logout</NavLink>
      </div>
    )}; 
    return (
      <div className={cssClass}>
        <NavLink to="/sign_in" className="nav__link" activeClassName="nav__link--active">Sign in</NavLink>
        <NavLink to="/register" className="nav__link" activeClassName="nav__link--active">Register</NavLink>
      </div> 
    )
};

export default Navigation;