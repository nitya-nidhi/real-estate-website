/**
    * @description      : 
    * @author           : Administrator
    * @group            : 
    * @created          : 28/09/2021 - 20:18:13
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/09/2021
    * - Author          : Administrator
    * - Modification    : 
**/
import React from 'react'
import logo from '../images/logo1.jpg';

function Navbar() {
    return (
        <nav>
            <a href='#' className='logo'>
                <img src={logo} alt='logo'/>
            </a>
            <input className='menu-btn' type='checkbox' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><a href='#' className='active'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Agent</a></li>
                <li><a href='#'>Property</a></li>
                <li><a href='#'>Contact</a></li>

            </ul>
            </nav>
    )
}

export default Navbar;
