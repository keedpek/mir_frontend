import * as React from 'react';
import './form.css'

export const FormOptions = (props) =>
{
    return(
        <div className='form'>        
            <h1>Заполните ваш профиль</h1>
            {props.options.map((field) => (
                <div>
                    <h2> {field.label}{props.error.field1 && <sup className='error'>*</sup>} </h2>
                    <div className="button-list">
                        {field.options.map((option) => (
                        <label key={option} className="radio-button-label" style={{backgroundColor: props.formData[field.key] === option ? '#7653EB' : '#f2f2f2'}}>
                            <input
                                type="radio"
                                value={option}
                                checked={props.formData[field.key] === option}
                                onChange={() => props.updateFormData({
                                    ...props.formData,
                                    [field.key]: option,
                                })}
                            />
                            <span className="button-text">{option}</span>
                        </label>
                        ))}
                    </div>
                </div>
            ))}
            {props.error.field1 && <p className='error'>Заполните все поля</p>}
        </div>
    )
}