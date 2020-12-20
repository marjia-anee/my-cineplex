import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
      return (
            <div>
                 <div className="header d-flex">
                <img src={logo} alt="" />
                <nav className="ml-auto">
                    <Link to="/home">Home</Link>
                    <Link to="/donation">New Movies</Link>
                    <Link to="/events">Upcoming</Link>
                    <Link to="/blog">About us</Link>
                </nav>
            </div> 
            </div>
      );
};

export default Header;