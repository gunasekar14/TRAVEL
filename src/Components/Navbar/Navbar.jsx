import React, { useState } from 'react';
import { SiConsul } from 'react-icons/si';
import { BsPhoneVibrate } from 'react-icons/bs';
import { AiOutlineGlobal } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';
import flight from '../../Assets/flight.png';

const Navbar = () => {
  // State to manage the visibility of the navbar menu
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // Function to toggle the visibility of the navbar menu
  const toggleNavBar = () => {
    setIsMenuVisible(prevState => !prevState);
  };

  // Function to hide the navbar menu
  const hideNavBar = () => {
    setIsMenuVisible(false);
  };

  return (
    <nav className='navBar flex'>
      <div className='navBarOne flex'>
        <div>
          <SiConsul className='icon' />
        </div>

        <ul className={`navLinks ${isMenuVisible ? 'show' : ''} flex`}>
          <li className='flex'>
            <BsPhoneVibrate /> Support
          </li>
          <li className='flex'>
            <AiOutlineGlobal /> Language
          </li>
        </ul>

        <div className="atb flex">
          <button className="btn">Sign In</button>
          <button className="btn">Sign Out</button>
        </div>
      </div>

      <div className="navBarTwo flex">
        <div className='logoDiv'>
          <img src={flight} alt="Flight Logo" />
        </div>

        <div className={`navMenu ${isMenuVisible ? 'show' : ''}`}>
          <ul className="menu flex">
            <li onClick={hideNavBar} className="listItem">Home</li>
            <li onClick={hideNavBar} className="listItem">About</li>
            <li onClick={hideNavBar} className="listItem">Offers</li>
            <li onClick={hideNavBar} className="listItem">Seats</li>
            <li onClick={hideNavBar} className="listItem">Destinations</li>
          </ul>

          <button className='btn flex btnOne'>Contact</button>
        </div>

        <button className='btn flex btnTwo' onClick={hideNavBar}>Contact</button>

        <div onClick={toggleNavBar} className='toggleIcon'>
          <CgMenuGridO className='icon' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
