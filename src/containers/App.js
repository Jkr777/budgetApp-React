import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import storeGenerator from '../redux/store/store';
import Header from '../containers/header/Header';
import SmallNav from '../components/smallNavigation/SmallNav';
import Main from '../containers/Main';
import Footer from '../components/footer/Footer';
import { setAuthorizationToken, getProfile, setUser } from '../redux/action_generators/user';

const store = storeGenerator();

class App extends Component {
  componentDidMount() {
    if(localStorage.getItem("auth-token")){
      setAuthorizationToken(localStorage.getItem("auth-token"));
      try {
        store.dispatch(getProfile());
      } catch(err) {
        localStorage.removeItem("auth-token");
        store.dispatch(setUser({}));
      }
    };
  }
  render() {
    return(
      <Provider store={store}>
      <BrowserRouter>
        <Header />
        <SmallNav />
        <Main />
        <Footer />  
      </BrowserRouter>
    </Provider>
    )
  }
}

export default App;
