import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../redux/action_generators';
import Navigation from '../navigation/Navigation';

const SmallNav = props =>  (
  <Navigation 
    auth={props.user.auth}
    cssClass={props.navClick ? "small-nav open" : "small-nav"}
    logOut={props.logOut}
  />
);

const mapStateToProps = state => ({
  user: state.user,
  navClick: state.userInteraction.navClick 
});

export default connect( mapStateToProps, { logOut } )(SmallNav);