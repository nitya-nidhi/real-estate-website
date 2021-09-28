/**
    * @description      : 
    * @author           : Administrator
    * @group            : 
    * @created          : 28/09/2021 - 20:18:10
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/09/2021
    * - Author          : Administrator
    * - Modification    : 
**/
import React from 'react'
import Navbar from './Navbar';

function Header() {
    return (
        <div className='header'>
            <Navbar />
            <div className='intro'>
                <p>Are you looking for a Property?</p>
                <h1><span>Buy </span>and<span> Sell</span> Properties</h1>
                <p className='details'>details of the property</p>
                <a  href='#' className='header-btn'>Details</a>
            </div>
            
        </div>
    )
}

export default Header
