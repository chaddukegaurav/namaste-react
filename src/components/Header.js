import React from 'react';
import { LOGO_URL } from '../utils/constant';
import { useState } from 'react';
const Header = () => {
  const [btnHandler, setBtnHandler] = useState('Login');
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={LOGO_URL} />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
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
