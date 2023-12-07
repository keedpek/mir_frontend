import * as React from 'react';
import './style.css';
import {Box} from "../../Box";
import { useState } from 'react'


export const PageQuest = () => {
    const [user, setUserInfo] = useState(
        {
            firstname: 'Данила',
            lastname: 'Светланович',
            gender: 'мужчина',
            country: 'Ро-си-я',
            city: 'СПБ',
            about: 'Лох',
            hobbies: ['Хоккей', 'Вязание крючком', 'Футбол', 'Шайлушай', 'Танцы с бубном'],
            height: 190,
            goals: 'Отсутствуют',
            body_type: 'Громила',
            photo: 'https://avatars.mds.yandex.net/i?id=de489974b45e41d90476e472be93c91b9cd70a8a-3612059-images-thumbs&n=13'
        }
    );

    
    var isEditing = false;

    function editText() {
        let h = document.querySelectorAll("#editableText");
        let button = document.querySelector(".edit");
        let back = document.querySelector(".back");
        let charact = document.querySelector(".charact");
        let photo = document.querySelector(".photo");
        const values = [];

        console.log(user);

        if (isEditing) {
            back.style.display = 'none';
            let inpElems = document.querySelectorAll(".editable");
            for (const inp of inpElems) {
                let text;
                switch (inp.id) {
                    case "name":
                        text = document.createElement("h3");
                        text.innerText = inp.value;
                        text.id = "editableText";
                        inp.replaceWith(text);
                        break; 
                    case "about":
                    case "value":
                        text = document.createElement("p");
                        text.innerText = inp.value;
                        text.className = inp.id;
                        text.id = "editableText";
                        inp.replaceWith(text);
                        break; 
                    case "photo":
                        photo.src = inp.value;
                        inp.remove();
                        break; 
                    default:
                        console.log("Ебанёт? не должно")
                        break;
                }
            }
            button.textContent = "Редактировать";
        } else {
            button.textContent = "Подтвердить";     

            for (const elem of h) {                 //замещение текста на инпуты
                let inputElement = document.createElement("input");
                let value = elem.innerText;
                values.push(value);
                inputElement.value = elem.innerText;
                inputElement.className = "editable";
                switch (elem.className) {
                    case "value":
                        inputElement.id = "value";
                        break; 
                    case "about":
                        inputElement.id = "about";
                        break; 
                    default:
                        inputElement.id = "name";
                        break; 
                }
                elem.replaceWith(inputElement);
            }

            let photoInput = document.createElement("input");       //добавление инпута для изменения фото
            photoInput.className = "editable";
            photoInput.id = "photo";
            photoInput.value = photo.src;
            charact.append(photoInput);
            
            hobbies.push (      // надо доделать отрисовку обновленных хобби
                <Box>
                    +
                </Box>
            )
            
            back.style.display = 'block';           //кнопка отмены
            back.addEventListener("click", () => { //какая-то чучуть хуита получается
                back.style.display = 'none';
                let inpElems = document.querySelectorAll(".editable");
                for (const inp of inpElems) {
                    let text;
                    switch (inp.id) {
                    case "name":
                        text = document.createElement("h3");
                        text.innerText = values.shift();
                        text.id = "editableText";
                        inp.replaceWith(text);
                        break; 
                    case "about":
                    case "value":
                        text = document.createElement("p");
                        text.innerText = values.shift();
                        text.className = inp.id;
                        text.id = "editableText";
                        inp.replaceWith(text);
                        break; 
                    case "photo":
                        photo.src = user.photo;
                        inp.remove();
                        break; 
                    default:
                        console.log("Ебанёт? не должно")
                        break;
                    }
                }
                button.textContent = "Редактировать";
            })

        }
        isEditing = !isEditing;
    }

    const hobbies = [];

    user.hobbies.forEach((hobbie) => {
        hobbies.push (
            <Box>
                {hobbie}
            </Box>
        )
    })

    return (
        <div className="container">
            <div className='info'>
                <div className='name'>
                    <h3 id="editableText">{user.firstname}</h3>
                    <h3 id="editableText">{user.lastname}</h3>
                </div>
                <div className='charact'>
                    <h3 className='row'>
                        <p className='key'>Пол: </p><p className='value' id="editableText">{user.gender}</p>
                    </h3>
                    <h3 className='row'>
                        <p className='key'>Страна: </p><p className='value' id="editableText">{user.country}</p>
                    </h3>
                    <h3 className='row'>
                        <p className='key'>Город: </p><p className='value' id="editableText">{user.city}</p>
                    </h3>
                    <h3 className='row'>
                        <p className='key'>О себе: </p><p className='about' id="editableText">{user.about}</p>
                    </h3> 
                    <div className='row'>
                        <h3 className='key'>Хобби: </h3>
                        <div className='hobbie-field'>
                            {hobbies}
                        </div>
                    </div>
                    <h3 className='row'>
                        <p className='key'>Цели: </p><p className='about' id="editableText">{user.goals}</p>
                    </h3>
                    <h3 className='row'>
                        <p className='key'>Рост: </p><p className='value' id="editableText">{user.height}</p>
                    </h3>
                    <h3 className='row'>
                        <p className='key'>Телосложение: </p><p className='value' id="editableText">{user.body_type}</p>
                    </h3>
                </div>
                <div className='row'>
                    <button className='edit' onClick={editText}>Редактировать</button>
                    <button className='back' onClick={editText}>Отменить</button>
                </div>
            </div>  
            <img src={user.photo} alt='фотокарточка'
            className='photo'/>  
        </div>
    );
};