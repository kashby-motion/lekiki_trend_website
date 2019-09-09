import React from 'react';
import logo from '../images/logo_mono.svg';
import '../App.css';

function Header(props) {
    return (
        <header>
            <img src={logo} alt="logo" />
        </header>
    );
}

export default Header;
