/**
    * @description      : 
    * @author           : Administrator
    * @group            : 
    * @created          : 28/09/2021 - 21:42:44
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/09/2021
    * - Author          : Administrator
    * - Modification    : 
**/
import React from 'react'
import aboutimage from '../images/hero1.jpg'

function About() {
    return (
        <div className='about'>
            <div className='about-model'>
                <img src={aboutimage} alt='about image'/>
            </div>
            <div className='about-text'>
                <h2>India's No.1 Property Portal<br/>#Thebest<span>&#9996;</span></h2>
                <button>View more Details</button>
                
                </div>
        </div>
    )
}

export default About
