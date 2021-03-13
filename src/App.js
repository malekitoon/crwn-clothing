import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import './App.css';

const App = ({ currentUser }) => (
  <div className='App'>
    <Header />

    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
      <Route exact path='/checkout' component={CheckoutPage} />
      <Route
        exact
        path='/signin'
        render={() => (currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />)}
      />
    </Switch>
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
