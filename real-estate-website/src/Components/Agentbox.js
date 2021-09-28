/**
    * @description      : 
    * @author           : Administrator
    * @group            : 
    * @created          : 28/09/2021 - 22:35:00
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/09/2021
    * - Author          : Administrator
    * - Modification    : 
**/
import React from 'react'

function Agentbox(props) {
    return (
        <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image} alt=''></img>
            </div>
            <div className='a-b-text'>
                <h3>{props.name}</h3>
                <a href='#' className='agent-btn'>Learn More</a>
            </div>
            
        </div>
    )
}

export default Agentbox
