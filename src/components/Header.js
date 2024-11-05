import React from 'react';
import { LOGO_URL } from '../utils/constant';
import { useState } from 'react';
import { Route, Link } from 'react-router-dom';
const Header = () => {
  const [btnHandler, setBtnHandler] = useState('Login');
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={LOGO_URL} />
      </div>
      <div className='nav-items'>
        <ul>
          <li>
            <Link to='/' >Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact us</Link>
          </li>
          <li>Cart</li>
          <button
            className='login'
            onClick={() => {
              btnHandler == 'Login'
                ? setBtnHandler('Logout')
                : setBtnHandler('Login');
            }}
          >
            {btnHandler}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
