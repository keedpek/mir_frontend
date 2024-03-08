import * as React from 'react';
import { useState } from 'react';
import './form.css';
import { Select } from '../../../components/select/select';

export const FormLocation = (props) =>
{
    const [manualMode, setManualMode] = useState(false);

    const changeMode = () => {
        setManualMode((val) => !val)
    }

    const countries = ['Беларусь', 'Россия', 'Украина']

    const cities = [
        {
            country: 'Беларусь',
            cityList: ['Брест', 'Витебск', 'Липнишки', 'Минск'],
        },
        {
            country: 'Россия',
            cityList: ['Воркута','Москва','Нижний Тагил','СПб'],
        },
        {
            country: 'Украина',
            cityList: ['Днепр', 'Киев', 'Львов', 'Харьков'],
        },
        {
            country: '',
            cityList: '',
        },
    ]

    return(
            manualMode ?
            <div className='form'>
                <h1>Заполните Ваше местоположение</h1>
                
                <h2>Страна</h2>
                <Select 
                options={countries}
                onChange={(e) => 
                    props.updateFormData({
                        city: '',
                        country: e.target.innerText,
                })}
                value={props.formData.country}
                placeholder={'Выберите страну'}
                />

                <h2>Город</h2>
                <Select 
                options={cities.find(country => country.country === props.formData.country).cityList} 
                onChange={(e) => 
                    props.updateFormData({
                        ...props.formData,
                        city: e.target.innerText,
                })}
                value={props.formData.city}
                placeholder={'Выберите город'}
                />
                
            </div>
            :
            <div className='location-form'>    
                <svg width="80" height="111" viewBox="0 0 80 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 48C44.4183 48 48 44.4183 48 40C48 35.5817 44.4183 32 40 32C35.5817 32 32 35.5817 32 40C32 44.4183 35.5817 48 40 48Z" fill="#7653EB"/>
                    <path d="M40 0C17.945 0 0 17.0099 0 37.9099C0 47.8631 4.5775 61.0994 13.605 77.2519C20.855 90.2206 29.2425 101.948 33.605 107.783C34.3422 108.78 35.306 109.591 36.4184 110.15C37.5307 110.709 38.7603 111 40.0075 111C41.2547 111 42.4843 110.709 43.5966 110.15C44.709 109.591 45.6728 108.78 46.41 107.783C50.765 101.948 59.16 90.2206 66.41 77.2519C75.4225 61.1043 80 47.8681 80 37.9099C80 17.0099 62.055 0 40 0ZM40 55.5021C36.8355 55.5021 33.7421 54.572 31.1109 52.8296C28.4797 51.0871 26.4289 48.6105 25.2179 45.7128C24.0069 42.8152 23.6901 39.6267 24.3074 36.5506C24.9248 33.4745 26.4487 30.649 28.6863 28.4312C30.9239 26.2135 33.7749 24.7032 36.8786 24.0913C39.9823 23.4794 43.1993 23.7935 46.1229 24.9937C49.0466 26.1939 51.5454 28.2265 53.3035 30.8343C55.0616 33.442 56 36.508 56 39.6443C55.9954 43.8487 54.3082 47.8795 51.3086 50.8524C48.309 53.8253 44.242 55.4975 40 55.5021Z" fill="#7653EB"/>
                </svg>
                <h1 style={{margin: '10% auto 4% auto'}}> Включите своё местоположение </h1>
                <p className='loc-text'> Включите использование вашего местоположения, чтобы показать людей поблизости </p>
                <button className='enter-loc-button' onClick={changeMode}>
                    Ввести вручную
                </button>
            </div>
    )
}