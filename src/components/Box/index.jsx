import * as React from 'react';
import './style.css';

export const Box = ({children}) => {
    return (
        <div className='box'>
            <p className='text'>{children}</p>
        </div>
    );
}