/**
    * @description      : 
    * @author           : Administrator
    * @group            : 
    * @created          : 28/09/2021 - 22:29:05
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/09/2021
    * - Author          : Administrator
    * - Modification    : 
**/
import React from 'react'
import Agentbox from './Agentbox';
import agentimg1 from '../images/s1.jpeg'
import agentimg2 from '../images/s2.png'
import agentimg3 from '../images/s3.jpeg'

function Agent() {
    return (
        <div className='agent'>
            <div className='a-heading'>
            <h1>Agents</h1>
            <p>About the Agent</p>
            </div>
            <div className='b-container'>
                <Agentbox image={agentimg1} name="Nitesh"/>
                <Agentbox image={agentimg2} name="Ritesh"/>
                <Agentbox image={agentimg3} name="Nitya"/>

            </div>
            
        </div>
    )
}

export default Agent
