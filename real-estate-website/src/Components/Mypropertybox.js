/**
    * @description      : 
    * @author           : Administrator
    * @group            : 
    * @created          : 28/09/2021 - 23:02:15
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/09/2021
    * - Author          : Administrator
    * - Modification    : 
**/
import React from 'react'

function Mypropertybox(props) {
    return (
        <div className='p-box'>
            <img src={props.image} alt=''></img>
            <p>{props.name}</p>
            <a href='#' className='price'>{props.price}</a>
            <a href='#' className='buy-btn'>Add to cart</a>  
        </div>
    )
}

export default Mypropertybox
