import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/074 crown.svg';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser }) => (
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
    </div>
  </div>
);

export default Header;
