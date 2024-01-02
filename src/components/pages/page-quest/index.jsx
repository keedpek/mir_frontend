import * as React from 'react';
import './style.css';
import { Box } from "../../Box";
import { useState } from 'react'
import Select from 'react-select'

export const PageQuest = () => {
    const [user, setUser] = useState(
        {
            firstname: 'Данила',
            lastname: 'Светланович',
            age: 25,
            gender: 'male',
            country: 'Роcсия',
            city: 'СПБ',
            about: 'Лох',
            hobbies: ['photo', 'trips'],
            height: 190,
            goals: 'relationships',
            body_type: 'average',
            photo: 'https://avatars.mds.yandex.net/i?id=de489974b45e41d90476e472be93c91b9cd70a8a-3612059-images-thumbs&n=13'
        }
    );
    const [editedUser, setEditedUser] = useState({ ...user });
    const [isEditing, setIsEditing] = useState(false);

    const genderOptions = [
        {
            value: 'male',
            label: 'Мужчина'
        },
        {
            value: 'female',
            label: 'Женщина'
        }
    ];
    const goalOptions = [
        {
            value: 'relationships',
            label: 'Серьезные отношения'
        },
        {
            value: 'flirts',
            label: 'Флирт'
        },
        {
            value: 'friendship',
            label: 'Дружба'
        },
        {
            value: 'for_one_day',
            label: 'На одну ночь'
        }
    ];
    const bodyOptions = [
        {
            value: 'skinny',
            label: 'Худое'
        },
        {
            value: 'athletic',
            label: 'Спортивное'
        },
        {
            value: 'average',
            label: 'Среднее'
        },
        {
            value: 'full_physique',
            label: 'Полное'
        }
    ];
    const hobbyOptions = [
        {
            value: 'trips',
            label: 'Путешествия'
        },
        {
            value: 'photo',
            label: 'Фотография'
        },
        {
            value: 'music',
            label: 'Музыка'
        }
    ];

    const hobbies = [];
    user.hobbies.forEach((hobbie) => {
        hobbies.push (
            <Box>
                {hobbyOptions.find(g => g.value === hobbie).label}
            </Box>
        )
    });

    const handleInputChange = (field, value) => {
        setEditedUser((prevUser) => ({
          ...prevUser,
          [field]: value,
        }));
    };

    const handleHobbiesChange = (newHobbies) => {
        setEditedUser((prevUser) => ({
            ...prevUser,
            hobbies: newHobbies.map(h => h.value),
        }))
    }

    const handleEditButtonClick = () => {
        setUser(editedUser);
        setIsEditing(false);
    };

    const handleCancelButtonClick = () => {
        setEditedUser(user);
        setIsEditing(false);
    };

    return (
        <div>

            {!isEditing && (
                <div className="container">
                    <div className='info'>
                        <div className='name'>
                            <div>
                                <h3 className='editableText' id="firstname">{user.firstname}</h3>
                                <h3 className='editableText' id="lastname">{user.lastname}</h3>
                            </div>
                            <p className='age'>{user.age}</p>
                        </div>
                        <div className='charact'>
                            <h3 className='row'>
                                <p className='key'>Пол: </p><p className='value editableText' id="gender">{genderOptions.find(g => g.value === user.gender).label}</p>
                            </h3>
                            <h3 className='row'>
                                <p className='key'>Страна: </p><p className='value editableText' id="country">{user.country}</p>
                            </h3>
                            <h3 className='row'>
                                <p className='key'>Город: </p><p className='value editableText' id="city">{user.city}</p>
                            </h3>
                            <h3 className='row'>
                                <p className='key'>О себе: </p><p className='about editableText' id="about">{user.about}</p>
                            </h3> 
                            <div className='row'>
                                <h3 className='key'>Хобби: </h3>
                                <div className='hobbie-field'>
                                    {hobbies}
                                </div>
                            </div>
                            <h3 className='row'>
                                <p className='key'>Цели: </p><p className='about editableText' id="goals">{goalOptions.find(g => g.value === user.goals).label}</p>
                            </h3>
                            <h3 className='row'>
                                <p className='key'>Рост: </p><p className='value editableText' id="height">{user.height}</p>
                            </h3>
                            <h3 className='row'>
                                <p className='key'>Телосложение: </p><p className='value editableText' id="body_type">{bodyOptions.find(b => b.value === user.body_type).label}</p>
                            </h3>
                        </div>
                        <div className='row'>
                            <button className='edit' onClick={() => setIsEditing(true)}>Редактировать</button>
                        </div>
                    </div>  
                    <img src={user.photo} alt='фотокарточка'
                    className='photo'/>  
                </div>
            )}

            {isEditing && (
                <div className="container">
                    <div className='info'>
                        <div className='name'>
                            <div>
                                <input value={editedUser.firstname} id='firstname' className='editable' onChange={(e) => handleInputChange(e.target.id, e.target.value)}></input>
                                <input value={editedUser.lastname} id='lastname' className='editable' onChange={(e) => handleInputChange(e.target.id, e.target.value)}></input>
                            </div>
                            <p className='age'>{user.age}</p>
                        </div>
                        <div className='charact'>
                            <h3 className='row'>
                                <p className='key'>Пол: </p>
                                <Select
                                    value={genderOptions.find(g => g.value === editedUser.gender)}
                                    options={genderOptions}
                                    onChange={(e) => handleInputChange('gender', e.value)}
                                />
                            </h3>
                            <h3 className='row'>
                                <p className='key'>Страна: </p><input value={editedUser.country} id='country' className='editable' onChange={(e) => handleInputChange(e.target.id, e.target.value)}></input>
                            </h3>
                            <h3 className='row'>
                                <p className='key'>Город: </p><input value={editedUser.city} id='city' className='editable' onChange={(e) => handleInputChange(e.target.id, e.target.value)}></input>
                            </h3>
                            <h3 className='row'>
                                <p className='key'>О себе: </p><input value={editedUser.about} id='about' className='editable' onChange={(e) => handleInputChange(e.target.id, e.target.value)}></input>
                            </h3> 
                            <div className='row'>
                                <h3 className='key'>Хобби: </h3>
                                <Select
                                    value={hobbyOptions.filter(h => editedUser.hobbies.indexOf(h.value) >= 0)}
                                    options={hobbyOptions}
                                    onChange={handleHobbiesChange}
                                    isMulti={true}
                                />
                            </div>
                            <h3 className='row'>
                                <p className='key'>Цели: </p>
                                <Select
                                    value={goalOptions.find(g => g.value === editedUser.goals)}
                                    options={goalOptions}
                                    onChange={(e) => handleInputChange('goals', e.value)}
                                />
                            </h3>
                            <h3 className='row'>
                                <p className='key'>Рост: </p><input value={editedUser.height} id='height' className='editable' onChange={(e) => handleInputChange(e.target.id, e.target.value)}></input>
                            </h3>
                            <h3 className='row'>
                                <p className='key'>Телосложение: </p>
                                <Select
                                    value={bodyOptions.find(b => b.value === editedUser.body_type)}
                                    options={bodyOptions}
                                    onChange={(e) => handleInputChange('body_type', e.value)}
                                />
                            </h3>
                            <h3 className='row'>
                                <p className='key'>Фотокарточка: </p><input value={editedUser.photo} id='photo' className='editable' onChange={(e) => handleInputChange(e.target.id, e.target.value)}></input>
                            </h3>
                        </div>
                        <div className='row'>
                            <button className='edit' onClick={handleEditButtonClick}>Подтвердить</button>
                            <button className='back' onClick={handleCancelButtonClick}>Отменить</button>
                        </div>
                    </div>  
                    <img src={editedUser.photo} alt='фотокарточка'
                    className='photo'/>  
                </div>
            )}

        </div>
    );
};