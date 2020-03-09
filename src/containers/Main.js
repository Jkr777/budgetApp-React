import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import ProtectedRoute from '../components/ProtectedRoute';
import HomePage from '../components/homepage/HomePage';
import AuthForm from './authForm/AuthForm';
import ResetForm from './authForm/ResetForm';
import Flow from './flow/Flow';
import Profile from './profile/Profile';
import History from './history/History';

const Main = props => (
  <main>
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/register' exact render={props => <AuthForm endPoint={'register'} {...props} />} />
      <Route path='/sign_in' exact render={props => <AuthForm endPoint={'login'} {...props} />} />
      <Route path='/reset' exact render={props => <ResetForm endPoint={'reset link'} {...props} />} />
      <Route path='/reset/:token' exact render={props => <ResetForm endPoint={'reset password'} {...props} />} />
      <ProtectedRoute path='/cash_flow' auth={props.auth} exact component={Flow} />
      <ProtectedRoute path='/profile' auth={props.auth} exact component={Profile} />
      <ProtectedRoute path='/history' auth={props.auth} exact component={History} />
      <Redirect to='/' />
    </Switch>
  </main>
);

const mapStateToProps = state =>  ({
  auth: state.user.auth
})

export default connect(mapStateToProps)(Main);