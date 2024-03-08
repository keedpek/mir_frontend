import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegHeader } from './reg-header/header';
import { FormEmail } from './forms/form-email';
import { FormPassword } from './forms/form-password';
import { FormInfo } from './forms/form-info';
import { FormPhoto } from './forms/form-photos';
import { FormOptions } from './forms/form-options';
import { FormInterests } from './forms/form-interests';
import { FormLocation } from './forms/form-location';
import { RegFooter } from './reg-footer/footer';
import AuthService from '../../services/userAuth'
import UserService from '../../services/userApp'
import './page-reg.css'

//ПРИ ИЗМЕНЕНИИ КОЛ-ВА ФОРМ:
//1.ИЗМЕНИТЬ НОМЕРА В СТЕЙТЕ 
//2.ИЗМЕНИТЬ НОМЕРА В ВАЛИДАЦИИ(В Т.Ч. НОМЕРА ПОЛЕЙ В "СЪЕХАВШИХ" ФОРМАХ)
//3.ПОМЕНЯТЬ ФУНКЦИЮ ВАЛИДАЦИИ В handleSubmit, ТАМ ЖЕ ПРОВЕРИТЬ НОМЕРА ПОЛЕЙ ОТПРАВЛЯЕМЫХ ДАННЫХ(МБ СЪЕХАЛИ)
//4.ПОМЕНЯТЬ НОМЕР ДЛЯ complete-ЭКРАНА В РЕТУРНЕ
//5.ДОБАВИТЬ ФОРМУ НЕПОСРЕДСТВЕННО В РЕНДЕР(НЕ ЗАБЫТЬ ПРО НОМЕР ФОРМЫ В updateFormData) 
//6.ЧЕКНУТЬ ЧТО ТАМ ПО КНОПКАМ "ПРОПУСТИТЬ" В ФУТЕРЕ, ПОМЕНЯТЬ НОМЕР ДЛЯ КНОПКИ ОТПРАВКИ ДАННЫХ  
//7.ПОМЕНЯТЬ ПРОЦЕНТЫ ЗАПОЛНЕНИЯ ПРОГРЕССБАРА В ХЕДЕРЕ  

export const PageReg = () => {
    const [step, setStep] = useState(1); 
    const [error, setError] = useState(0);
    const [formData, setFormData] = useState({ 
        form1: {
            email: "",
        }, 
        form2: {
            password: "",
            confirmedPassword: "",
            agreed: false,
        }, 
        form3: {
            fullname: "",
            birthDate: {
                day: '',
                month: '',
                year: '',
            },
            gender: "none",
            height: '',
            about: "",
        }, 
        form4: {
            photos: [],
        },
        form5: {
            goal: 'none',
            alcohol: 'none',
            smoking: 'none',
            sport: 'none',
        },
        form6: {
            education: 'none',
            zodiac: 'none',
            type: 'none',
        },
        form7: {
            interests: [],
        },
        form8: {
            country: '',
            city: '',
        }
    });


    const options1 = [
        {
            key: 'goal',
            label: 'Я ищу',
            options: [
                'Серьезные отношения',
                'Флирт',
                'Дружба',
                'Ha одну ночь',
            ]
        },
        {
            key: 'alcohol',
            label: 'Отношение к алкоголю',
            options: [
                'Пью часто',
                'Иногда выпиваю',
                'Не пью',
                'Негативно',
            ]
        },
        {
            key: 'smoking',
            label: 'Отношение к курению',
            options: [
                'Курю',
                'Нормально',
                'Негативно',
            ]
        },
        {
            key: 'sport',
            label: 'Как часто занимаешься спортом',
            options: [
                'Часто занимаюсь',
                'Иногда занимаюсь',
                'Не занимаюсь',
                'Не люблю спорт',
            ]
        },
    ]
    
    const options2 = [
        {
            key: 'education',
            label: 'Образование',
            options: [
                'Высшее',
                'Среднее профессиональное',
                'Основное общее',
                'Незаконченное высшее',
            ]
        },
        {
            key: 'zodiac',
            label: 'Знак зодиака',
            options: [
                'Овен',
                'Телец',
                'Близнецы',
                'Рак',
                'Лев',
                'Дева',
                'Весы',
                'Скорпион',
                'Стрелец',
                'Козерог',
                'Водолей',
                'Рыбы',
            ]
        },
        {
            key: 'type',
            label: 'По типажу я',
            options: [
                'Экстраверт',
                'Интроверт',
                'Амбиверт',
            ]
        },
    ]

    const navigate = useNavigate();

    const validate = 
    {
        form1: function() {
            if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.form1.email)) {
                setError({
                    field1: true,
                });
                return false
            }
            setError(0);
            return true;
        },
        form2: function() {
            if (
                (formData.form2.password.length < 6) || (formData.form2.password.length > 32) ||
                formData.form2.password !== formData.form2.confirmedPassword ||
                !formData.form2.agreed
            ) {
                setError({
                    field1: (formData.form2.password.length < 6) || (formData.form2.password.length > 32),
                    field2: formData.form2.password !== formData.form2.confirmedPassword,
                    field3: !formData.form2.agreed,
                });
                return false
            }
            setError(0);
            return true;
        },
        form3: function() {
            if (
                (formData.form3.fullname.length < 1) ||
                (formData.form3.fullname.length > 32) ||
                (formData.form3.birthDate.day < 1) ||
                (formData.form3.birthDate.day > 31) ||
                (formData.form3.birthDate.month < 1) || 
                (formData.form3.birthDate.month > 12) ||  
                (formData.form3.birthDate.year < 1900) ||  
                (formData.form3.birthDate.year > 2024) ||  
                (formData.form3.gender === "none") ||
                (formData.form3.height < 1) ||
                (formData.form3.height > 250)
            ) {
                setError({
                    field1: (formData.form3.fullname.length < 1) || (formData.form3.fullname.length > 32),
                    field2: (formData.form3.birthDate.day < 1) ||
                            (formData.form3.birthDate.day > 31) ||
                            (formData.form3.birthDate.month < 1) || 
                            (formData.form3.birthDate.month > 12) ||  
                            (formData.form3.birthDate.year < 1900) ||  
                            (formData.form3.birthDate.year > 2024),
                    field3: (formData.form3.gender === "none"),
                    field4: (formData.form3.height < 1) || (formData.form3.height > 250),
                });
                return false;
            }
            setError(0);
            return true;
        },
        form4: function(){
            if(formData.form4.photos.length < 1) {
                setError({
                    field1: true,
                })
                return false;
            }
            setError(0);
            return true;
        },
        form5: function() {
            if (
                (formData.form5.goal === 'none') ||
                (formData.form5.alcohol === 'none') ||
                (formData.form5.smoking === 'none') ||
                (formData.form5.sport === 'none')   
            ) { 
                setError({
                    field1: true,
                });
                return false; 
            }
            setError(0);
            return true;
        },
        form6: function() {
            if (
                (formData.form6.education === 'none') ||
                (formData.form6.zodiac === 'none') ||
                (formData.form6.type === 'none')   
            ) { 
                setError({
                    field1: true,
                });
                return false; 
            }
            setError(0);
            return true;
        },
        form7: function() {
            if (formData.form7.interests.length < 1) {
                setError({
                    field1: true,
                });
                return false; 
            }
            setError(0);
            return true;
        },
        form8: function() {
            if (!formData.form8.country || !formData.form8.city) {
                setError({
                    field1: !formData.form8.country,
                    field2: !formData.form8.city,
                });
                return false;
            }
            setError(0);
            return true
        }
    }
 
    const updateFormData = (formName, data) => { 
        setFormData((prevData) => ({ 
            ...prevData, 
            [formName]: data, 
        })); 
    }; 
 
    const handleContinue = () => { 
        if (validate["form" + step]())
        {
            setStep((prevStep) => prevStep + 1); 
        };
        console.log(formData)
    };

    const handleBack = () => { 
        if (step > 1) {
            setError(0);
            setStep((prevStep) => prevStep - 1); 
        };
        console.log(formData)
    }; 
 
    const handleSkip = () => {
        setError(0);
        setStep((prevStep) => prevStep + 1);
    }

    const handleSubmit = () => {
        if (validate.form8()){
            setStep((prevStep) => prevStep + 1);
            setTimeout(() => {
                AuthService.registration(formData.form1.email, formData.form2.password)
                .then (() => {
                    return AuthService.login(formData.form1.email, formData.form2.password);
                })
                .then (() => {
                    return AuthService.getprofile();
                })
                .then (() => {
                    return UserService.createQuest({
                        fullname: formData.form3.fullname,
                        birthDate: formData.form3.birthDate,
                        gender: formData.form3.gender,
                        about: formData.form3.about,
                        photos: formData.form4.photos,
                        goal: formData.form5.goal,
                        smoking: formData.form5.smoking,
                        sport: formData.form5.sport,
                        interests: [
                            {                                    
                                "hobby_name": "string",
                            }
                        ],
                        email: formData.form1.email,
                        password: formData.form2.password,
                    })
                })
                .then(() => {
                    navigate('/');
                })
            }, 2000)
        } 
    }; 
    
    const renderForm = () => { 
        switch (step) { 
            case 1: 
                return <FormEmail formData={formData.form1} updateFormData={(data) => updateFormData('form1', data)} error={error}/>; 
            case 2:
                return <FormPassword formData={formData.form2} updateFormData={(data) => updateFormData('form2', data)} error={error}/> 
            case 3:
                return <FormInfo formData={formData.form3} updateFormData={(data) => updateFormData('form3', data)} error={error}/> 
            case 4:
                return <FormPhoto formData={formData.form4} updateFormData={(data) => updateFormData('form4', data)} error={error}/> 
            case 5:
                return <FormOptions formData={formData.form5} options={options1} updateFormData={(data) => updateFormData('form5', data)} error={error}/>
            case 6:
                return <FormOptions formData={formData.form6} options={options2} updateFormData={(data) => updateFormData('form6', data)} error={error}/>
            case 7:
                return <FormInterests formData={formData.form7} updateFormData={(data) => updateFormData('form7', data)} error={error}/>
            case 8:
                return <FormLocation formData={formData.form8} updateFormData={(data) => updateFormData('form8', data)} error={error}/>
            default: 
                return null; 
        } 
    }; 
    
    return(
        <div className='page-reg'>        
            {step === 9 ? 
            <div className='completed'>
                <h1>Completed!</h1>
            </div> 
            :
            <div style={{height: '100%'}}>
                <RegHeader curStep={step} />
                <div className='form-container' style={{height: (step > 4 && step < 8) ? '70%' : '75%'}}> 
                    {renderForm()}  
                </div>
                <RegFooter onBack={handleBack} onContinue={handleContinue} onSkip={handleSkip} onSubmit={handleSubmit} curStep={step}/>
            </div>}
        </div>
    )
}