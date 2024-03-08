import * as React from 'react';
import { useRef } from 'react';
import './form.css'

export const FormPhoto = (props) =>
{
    const fileInputRef = useRef(null);

    const addNewPhoto = (photo) => {
        console.log(photo)
        if (photo) {
            props.updateFormData({
                photos: [...props.formData.photos, photo],
            })
        } 
    }

    const deleteImage = (index) => {
        const newArray = [...props.formData.photos];
        newArray.splice(index, 1);
        props.updateFormData({
            photos: newArray,
        })
    }

    return(
        <div className='form'>     
            <h1>Заполните Ваш профиль</h1>   
            <h2>Ваши фотографии</h2>
            {props.error.field1 && props.formData.photos.length === 0 && <p className='error'>Выберите как минимум одну фотографию</p>}
            <div className='image-container'>
                {props.formData.photos.map((photo, index) => 
                <div className='image-placeholder'>
                    <img key={index} src={URL.createObjectURL(photo)} alt={`Фотография ${index}`}/>
                    <button className='remove-img-button' onClick={() => deleteImage(index)}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C4.48606 0 0 4.48606 0 10C0 15.5139 4.48606 20 10 20C15.5139 20 20 15.5139 20 10C20 4.48606 15.5139 0 10 0ZM13.6207 12.5332C13.6951 12.6039 13.7546 12.6888 13.7957 12.7829C13.8368 12.877 13.8587 12.9783 13.86 13.081C13.8613 13.1837 13.8421 13.2856 13.8034 13.3807C13.7647 13.4758 13.7074 13.5622 13.6348 13.6348C13.5622 13.7074 13.4758 13.7647 13.3807 13.8034C13.2856 13.8421 13.1837 13.8613 13.081 13.86C12.9783 13.8587 12.877 13.8368 12.7829 13.7957C12.6888 13.7546 12.6039 13.6951 12.5332 13.6207L10 11.088L7.46683 13.6207C7.32139 13.7588 7.12774 13.8347 6.92716 13.8322C6.72657 13.8296 6.53492 13.7488 6.39307 13.6069C6.25123 13.4651 6.1704 13.2734 6.16784 13.0728C6.16527 12.8723 6.24116 12.6786 6.37933 12.5332L8.91202 10L6.37933 7.46683C6.24116 7.32139 6.16527 7.12774 6.16784 6.92716C6.1704 6.72657 6.25123 6.53492 6.39307 6.39307C6.53492 6.25123 6.72657 6.1704 6.92716 6.16784C7.12774 6.16527 7.32139 6.24116 7.46683 6.37933L10 8.91202L12.5332 6.37933C12.6786 6.24116 12.8723 6.16527 13.0728 6.16784C13.2734 6.1704 13.4651 6.25123 13.6069 6.39307C13.7488 6.53492 13.8296 6.72657 13.8322 6.92716C13.8347 7.12774 13.7588 7.32139 13.6207 7.46683L11.088 10L13.6207 12.5332Z" fill="white"/>
                        </svg>
                    </button>
                </div>
                )}
                <input
                style={{display: 'none'}}
                type='file' 
                onChange={(event) => addNewPhoto(event.target.files[0])}
                ref={fileInputRef}
                />
                {(props.formData.photos.length < 5) && <button className='add-photo-button' onClick={() => fileInputRef.current.click()}>
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.3877 16.653H32.6122" stroke="#8D9496" stroke-width="2.54067" stroke-linecap="round"/>
                    <path d="M16.6528 32.6122L16.6528 1.38776" stroke="#8D9496" stroke-width="2.54067" stroke-linecap="round"/>
                    </svg>
                </button>}
            </div>
        </div>
    )
}   