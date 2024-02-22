import * as React from 'react';
import './form.css'

export const FormInterests = (props) =>
{
    const interests = [
        'Фотография',
        'Кинотеатры',
        'Компьютерные игры',
        'Тусовки и клубы',
        'Здоровая еда',
        'Вегетарианство',
        'Суши',
        'Пицца',
        'Рисование',
        'Настольные игры',
        'Активный отдых',
        'Фитнес',
        'Трен. зал',
        'Кофе',
        'Чай',
        'Пение',
        'Танцы',
        'Бег',
        'Кошки',
        'Собаки',
        'Театры',
        'Велосипед',
        'Музыка',
        'Классическая музыка',
        'Хип-хоп',
        'Рэп',
        'Техно',
        'Рок',
        'Поп-музыка',
        'Меломан',
        'Рыбки',
    ];
    
    const handleOptionChange = (option) => {
        props.updateFormData({
            interests: props.formData.interests.includes(option) ? 
            props.formData.interests.filter((selected) => selected !== option) : 
            [...props.formData.interests, option],
        }) 
      };

    return(
        <div style={{height: '100%'}}>
            <div className='form'>        
                <h1> Заполните Ваши интересы </h1>
            </div>
            <div className='checkbox-input-holder'>
                {interests.map((interest, index) => (
                    <label key={index} className='check-button' 
                    style={{
                        bottom: `${50 + (Math.random() * 200)}px`, 
                        left: `${300 + (Math.random() * 1000)}px`,
                        backgroundColor: props.formData.interests.includes(interest) ? '#7653EB' : '#f2f2f2',
                        width: props.formData.interests.includes(interest) ? '120px' : '70px',
                        height: props.formData.interests.includes(interest) ? '120px' : '70px',
                        }}>
                        <input
                            type="checkbox"
                            checked={props.formData.interests.includes(interest)}
                            onChange={() => handleOptionChange(interest)}
                        />
                        <p className='check-button-text'> {interest} </p>
                    </label>
                ))}
            </div>
        </div>
    )
}
