import React from 'react';
import { LOGO_URL } from '../utils/constant';
import { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () => {
  const [btnHandler, setBtnHandler] = useState('Login');

  const onlineStatus = useOnlineStatus();
  return (
    <div className='flex justify-between bg-pink-50'>
      <div className='logo-container p-4 '>
        <img className='w-40 rounded-lg' src={LOGO_URL} />
      </div>
      <div className='nav-items'>
        <ul className='flex p-5 m-6 gap-6 font-semibold '>
          <li>Online Status : {onlineStatus ? '🟢' : '🔴'}</li>
          <li >
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact us</Link>
          </li>
          <li>
            <Link to='/grocery'>Grocery Store</Link>
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
