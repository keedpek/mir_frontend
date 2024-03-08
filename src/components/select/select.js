import * as React from 'react';
import { useState } from 'react';
import './select.css'

export const Select = (props) =>
{
  const [isListVisible, setListVisibility] = useState(false);
    return(
      <div className='wrapper'>
        <div className='select'>        
          <input className='input-in-select' placeholder={props.placeholder} value={props.value}  onFocus={() => {setListVisibility((prevValue) => !prevValue)}}/>
          <button className='drop-down-button' onClick={() => {setListVisibility((prevValue) => !prevValue)}}>
            {isListVisible ? 
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 14L10 6L18 14" stroke="#8D9496" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            :
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L10 14L2 6" stroke="#8D9496" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            }
          </button>
        </div>
        {isListVisible && <div className='options-list'>
            {props.options ?
              props.options.map((option, index) => <div className='option' key={index} onClick={(e) => {
                props.onChange(e);
                setListVisibility(false);
              }}>{option}</div>)
              :
              <div className='no-options'>Нет доступных вариантов</div>
            }
        </div>}
      </div>
    )
}