import * as React from 'react';
import './header.css'

export const RegHeader = (props) =>
{

    return(
        <div className='header'>        
            <h1>
                LOGO
            </h1>
            <div className='progress-bar'>
                <div className='progress-bar-progress' style={{width: `${props.curStep * 12.5}%`}}></div>
                <div className='progress-bar-bar'></div>
            </div>
        </div>
    )
}