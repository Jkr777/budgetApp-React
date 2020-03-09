import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logOut, toggleNav } from '../../redux/action_generators';
import {ReactComponent as MenuIcon} from '../../img/menuIcon.svg';
import Navigation from '../../components/navigation/Navigation';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="nav">
          <span className="nav__title">Budget App</span>
          <div className="nav__menu-icon" onClick={this.props.toggleNav}>
            <MenuIcon />
          </div>
          <Navigation 
            auth={this.props.user.auth}
            cssClass="navItems"
            logOut={this.props.logOut}
          />
        </nav>
      </header>
    );
  };
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { logOut, toggleNav })(Header);