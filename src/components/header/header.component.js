import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/074 crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link to='/' className='logo-container'>
      <Logo className='logo' />
    </Link>

    <div className='options'>
      <Link to='/shop' className='option'>SHOP</Link>
      <Link to='/contact' className='option'>CONTACT</Link>
      {currentUser
        ? (
          <a
            href='#'
            className='option'
            onClick={e => { e.preventDefault(); auth.signOut(); }}
          >
            sign out
          </a>
        )
        : <Link to='/signin' className='option'>SIGN IN</Link>}
      <CartIcon />
    </div>

    {!hidden && <CartDropdown />}
  </div>
);

const mapStateToProps = ({
  user: { currentUser },
  cart: { hidden },
}) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
