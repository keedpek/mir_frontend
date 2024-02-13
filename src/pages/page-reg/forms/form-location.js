import * as React from 'react';
import { useState } from 'react';
import './form.css';
import location from '../../../assets/icons/location.svg';

export const FormLocation = (props) =>
{
    const [manualMode, setManualMode] = useState(false);
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');

    const changeMode = () => {
        setManualMode((val) => !val)
    }

    return(
            manualMode ?
            <div>
                <h1>Введите Ваше местоположение</h1>
                <h2>Страна</h2>

                <h2>Город</h2>

            </div>
            :
            <div className='location-form'>    
                <img src={location} alt=''/>
                <h1 style={{margin: '10% auto 4% auto'}}> Включите своё местоположение </h1>
                <p className='loc-text'> Включите использование вашего местоположения, чтобы показать людей поблизости </p>
                <button className='enter-loc-button' onClick={changeMode}>
                    Ввести вручную
                </button>
            </div>
    )
}