import * as React from 'react';
import './form.css'

export const FormInfo = (props) =>
{
    return(
        <div className='form'>        
            <h1>Заполните Ваш профиль</h1>
            <h2>Имя{props.error.field1 && <sup className='error'>*</sup>}</h2>
            <input
                className='text-input'
                placeholder='Полное имя'
                onChange={(e) => {
                    props.updateFormData(
                    {
                        ...props.formData,
                        fullname: e.target.value,
                    })}}
                value={props.formData.fullname}
            />

            <h2>Дата рождения{props.error.field2 && <sup className='error'>*</sup>}</h2>
            <div className='birthday-input-container'>
                <input
                    className='text-input'
                    placeholder='ДД'
                    style={{width: '30%'}}
                    onChange={(e) => {
                        props.updateFormData(
                        {
                            ...props.formData,
                            birthDate: {
                                ...props.formData.birthDate,
                                day: e.target.value,
                            },
                        })}}
                    value={props.formData.birthDate.day}
                />
                <input
                    className='text-input'
                    placeholder='ММ'
                    style={{width: '30%'}}
                    onChange={(e) => {
                        props.updateFormData(
                        {
                            ...props.formData,
                            birthDate: {
                                ...props.formData.birthDate,
                                month: e.target.value,
                            },
                        })}}
                    value={props.formData.birthDate.month}
                />
                <input
                    className='text-input'
                    placeholder='ГГГГ'
                    style={{width: '30%'}}
                    onChange={(e) => {
                        props.updateFormData(
                        {
                            ...props.formData,
                            birthDate: {
                                ...props.formData.birthDate,
                                year: e.target.value,
                            },
                        })}}
                    value={props.formData.birthDate.year}
                />
            </div>
            {props.error.field2 && <p className='error'>Введите корректно день, месяц и год</p>}

            <h2>Выберите пол{props.error.field3 && <sup className='error'>*</sup>}</h2>
            <div className='radio-container'>
                <label className="radio-button-label" style={{backgroundColor: props.formData.gender === "Male" ? '#7653EB' : '#f2f2f2'}}>
                    <input
                        type="radio"
                        value="Male"
                        checked={props.formData.gender === "Male"}
                        onChange={(e) => props.updateFormData({
                            ...props.formData,
                            gender: e.target.value,
                        })}
                    />
                    <span className="button-text">Мужчина</span>
                </label>
                <label className="radio-button-label" style={{backgroundColor: props.formData.gender === "Female" ? '#7653EB' : '#f2f2f2'}}>
                    <input
                        type="radio"
                        value="Female"
                        checked={props.formData.gender === "Female"}
                        onChange={(e) => props.updateFormData({
                            ...props.formData,
                            gender: e.target.value,
                        })}
                    />
                    <span className="button-text">Девушка</span>
                </label>
            </div>

            <h2>Рост{props.error.field4 && <sup className='error'>*</sup>}</h2>
            <input
                className='text-input'
                placeholder='См'
                style={{width: '30%'}}
                onChange={(e) => {
                    props.updateFormData(
                    {
                        ...props.formData,
                        height: e.target.value,
                    })}}
                value={props.formData.height}
            />

            <h2>Расскажи о себе</h2>
            <input
                className='text-input'
                placeholder='Введите текст'
                style={{height: '90px'}}
                onChange={(e) => {
                    props.updateFormData(
                    {
                        ...props.formData,
                        about: e.target.value,
                    })}}
                value={props.formData.about}
                />
        </div>
    )
}   