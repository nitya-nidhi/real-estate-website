/**
    * @description      : 
    * @author           : Administrator
    * @group            : 
    * @created          : 28/09/2021 - 22:54:03
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/09/2021
    * - Author          : Administrator
    * - Modification    : 
**/
import React from 'react';
import Mypropertybox from './Mypropertybox';
import pimage1 from '../images/pp1.jpeg';
import pimage2 from '../images/pp2.jpeg';
import pimage3 from '../images/pp3.png';



function Property() {
    return (
        <div className='product'>
            <div className='p-heading'>
                <h3>Properties</h3>
                <p>Mentioned properties</p>
            </div>

            <div className='product-container'>
              <Mypropertybox image={pimage1} name="Home" price="$5,0000000"/>
              <Mypropertybox image={pimage2} name="House" price="$7,000000"/>
              <Mypropertybox image={pimage3} name="Palace" price="$9,0000000"/>
            </div>
            
        </div>
    )
}

export default Property;
