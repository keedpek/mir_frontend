import * as React from 'react';
import { useState } from 'react';
import './form.css'

export const LoginForm = ({
    setLogin,setPassword
}) =>
{
    const [isPasswordVisible, setPasswordVisibility] = useState(false);

    return(
        <div className='form'>        
            <h1>Вход</h1>

            <h3>Введите свою почту и пароль, чтобы войти в аккаунт</h3>


            <h2>Почта</h2>
            <div className='input-holder'>
                <input 
                    type='text' 
                    className='input-with-svg' 
                    placeholder='Введите почту' 
                    onChange={(e) => setLogin(e.target.value)}
                />
                <div className='icon-holder'>
                    <span>
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5 0H2.5C1.83718 0.000721921 1.2017 0.269135 0.733016 0.746344C0.264329 1.22355 0.000709029 1.87058 0 2.54545V13.4545C0.000709029 14.1294 0.264329 14.7764 0.733016 15.2537C1.2017 15.7309 1.83718 15.9993 2.5 16H17.5C18.1628 15.9993 18.7983 15.7309 19.267 15.2537C19.7357 14.7764 19.9993 14.1294 20 13.4545V2.54545C19.9993 1.87058 19.7357 1.22355 19.267 0.746344C18.7983 0.269135 18.1628 0.000721921 17.5 0ZM16.867 4.21045L10.4384 9.30136C10.313 9.40059 10.1588 9.45445 10 9.45445C9.84122 9.45445 9.68696 9.40059 9.56161 9.30136L3.13304 4.21045C3.05751 4.15238 2.99407 4.0796 2.9464 3.99634C2.89873 3.91309 2.86779 3.82102 2.85538 3.72548C2.84296 3.62995 2.84932 3.53285 2.87408 3.43984C2.89884 3.34683 2.9415 3.25975 2.9996 3.18367C3.05769 3.1076 3.13006 3.04403 3.21249 2.99668C3.29492 2.94932 3.38577 2.91912 3.47977 2.90782C3.57376 2.89653 3.66903 2.90436 3.76002 2.93088C3.85102 2.95739 3.93593 3.00206 4.00982 3.06227L10 7.80591L15.9902 3.06227C16.14 2.9471 16.3283 2.89659 16.5143 2.92166C16.7004 2.94673 16.8693 3.04536 16.9845 3.19624C17.0997 3.34711 17.152 3.5381 17.13 3.72789C17.108 3.91769 17.0135 4.09104 16.867 4.21045Z" fill="#8D9496"/>
                        </svg>
                    </span>    
                </div>
            </div>


            <h2>Пароль</h2>
            <div className='input-holder'>
                <input
                    className='input-with-svg'
                    type={isPasswordVisible ? 'text' : 'password'}
                    placeholder='Введите пароль'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='icon-holder' style={{cursor: 'pointer'}} onClick={() => {setPasswordVisibility((value) => !value)}}>
                    <span>
                        {isPasswordVisible ? 
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" fill="#8D9496"/>
                            <path d="M19.1732 9.32031C18.1396 7.72187 16.7986 6.36406 15.2955 5.39336C13.6326 4.31836 11.7967 3.75 9.98652 3.75C8.32558 3.75 6.69238 4.22461 5.13222 5.16055C3.54121 6.11484 2.0998 7.50898 0.847849 9.30391C0.706515 9.50676 0.628677 9.74705 0.624226 9.99424C0.619774 10.2414 0.688911 10.4844 0.822849 10.6922C1.85449 12.3066 3.18222 13.6664 4.66191 14.6238C6.32793 15.7031 8.1209 16.25 9.98652 16.25C11.8111 16.25 13.651 15.6863 15.3068 14.6203C16.8092 13.6527 18.1475 12.2898 19.1771 10.6781C19.3065 10.4751 19.3748 10.2393 19.3741 9.99865C19.3735 9.75797 19.3037 9.52255 19.1732 9.32031ZM9.9998 13.75C9.25812 13.75 8.5331 13.5301 7.91641 13.118C7.29973 12.706 6.81908 12.1203 6.53525 11.4351C6.25143 10.7498 6.17716 9.99584 6.32186 9.26841C6.46655 8.54098 6.8237 7.8728 7.34815 7.34835C7.8726 6.8239 8.54078 6.46675 9.26821 6.32206C9.99564 6.17736 10.7496 6.25162 11.4349 6.53545C12.1201 6.81928 12.7058 7.29993 13.1178 7.91661C13.5299 8.5333 13.7498 9.25832 13.7498 10C13.7487 10.9942 13.3532 11.9474 12.6502 12.6504C11.9472 13.3534 10.994 13.7489 9.9998 13.75Z" fill="#8D9496"/>
                        </svg>
                        : 
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.8744 17.5C16.7923 17.5001 16.711 17.484 16.6352 17.4526C16.5594 17.4211 16.4905 17.375 16.4326 17.3168L2.68263 3.5668C2.57037 3.44864 2.50871 3.2913 2.51079 3.12832C2.51288 2.96534 2.57855 2.80963 2.6938 2.69438C2.80905 2.57913 2.96476 2.51346 3.12774 2.51137C3.29072 2.50929 3.44806 2.57095 3.56622 2.68321L17.3162 16.4332C17.4036 16.5206 17.4631 16.632 17.4871 16.7532C17.5112 16.8744 17.4989 17 17.4516 17.1141C17.4043 17.2283 17.3242 17.3259 17.2215 17.3946C17.1188 17.4633 16.998 17.5 16.8744 17.5ZM9.68693 12.3379L7.66388 10.3149C7.65229 10.3034 7.63739 10.2958 7.62127 10.2932C7.60515 10.2906 7.58862 10.2931 7.57401 10.3004C7.5594 10.3077 7.54744 10.3194 7.53981 10.3338C7.53217 10.3482 7.52926 10.3647 7.53146 10.3809C7.61313 10.9057 7.85957 11.391 8.23517 11.7666C8.61076 12.1422 9.09606 12.3886 9.62091 12.4703C9.63709 12.4725 9.65355 12.4696 9.66798 12.462C9.68241 12.4543 9.69409 12.4424 9.70137 12.4278C9.70866 12.4132 9.71118 12.3966 9.70859 12.3805C9.706 12.3644 9.69842 12.3495 9.68693 12.3379ZM10.3119 7.66212L12.3381 9.68751C12.3497 9.69916 12.3646 9.70688 12.3808 9.70956C12.397 9.71225 12.4136 9.70976 12.4283 9.70245C12.443 9.69514 12.4551 9.68338 12.4627 9.66885C12.4704 9.65432 12.4732 9.63775 12.4709 9.62149C12.3894 9.09592 12.1428 8.60992 11.7668 8.23385C11.3907 7.85778 10.9047 7.61116 10.3791 7.52969C10.3628 7.52718 10.3462 7.52988 10.3315 7.5374C10.3169 7.54492 10.305 7.55687 10.2975 7.57156C10.2901 7.58624 10.2875 7.60291 10.29 7.61917C10.2926 7.63543 10.3003 7.65047 10.3119 7.66212Z" fill="#8D9496"/>
                            <path d="M19.1797 10.6781C19.309 10.4751 19.3774 10.2393 19.3767 9.99865C19.376 9.75797 19.3063 9.52255 19.1758 9.32031C18.1422 7.72187 16.8012 6.36406 15.298 5.39336C13.6328 4.31836 11.7969 3.75 9.9875 3.75C9.03363 3.75131 8.08625 3.90683 7.18203 4.21055C7.15672 4.21896 7.13399 4.23372 7.116 4.25341C7.09801 4.2731 7.08535 4.29706 7.07925 4.32302C7.07314 4.34899 7.07377 4.37608 7.0811 4.40172C7.08842 4.42737 7.10219 4.45071 7.12109 4.46953L8.9664 6.31484C8.98557 6.33405 9.00941 6.34793 9.03558 6.35512C9.06174 6.36231 9.08933 6.36257 9.11562 6.35586C9.74111 6.20343 10.3953 6.2146 11.0152 6.38829C11.6352 6.56199 12.1999 6.89235 12.6551 7.34758C13.1104 7.80281 13.4407 8.36758 13.6144 8.9875C13.7881 9.60742 13.7993 10.2616 13.6469 10.8871C13.6402 10.9133 13.6405 10.9409 13.6477 10.9669C13.6549 10.993 13.6687 11.0168 13.6879 11.0359L16.3422 13.6922C16.3698 13.7199 16.4068 13.7362 16.4458 13.7379C16.4849 13.7396 16.5232 13.7267 16.5531 13.7016C17.5748 12.8307 18.4602 11.8116 19.1797 10.6781ZM10 13.75C9.43232 13.75 8.87204 13.6212 8.36141 13.3732C7.85078 13.1251 7.40312 12.7644 7.05219 12.3182C6.70125 11.872 6.4562 11.352 6.33552 10.7973C6.21483 10.2426 6.22165 9.66769 6.35547 9.11601C6.3621 9.08978 6.36181 9.06227 6.35462 9.03618C6.34743 9.01009 6.33359 8.98632 6.31445 8.96719L3.70351 6.35508C3.67583 6.32736 3.63874 6.31105 3.5996 6.30939C3.56046 6.30773 3.52212 6.32083 3.49219 6.34609C2.53945 7.15898 1.65625 8.14805 0.848826 9.30391C0.707492 9.50676 0.629654 9.74705 0.625202 9.99424C0.620751 10.2414 0.689887 10.4844 0.823826 10.6922C1.85547 12.3066 3.18281 13.6664 4.66289 14.6238C6.33047 15.7031 8.12187 16.25 9.9875 16.25C10.951 16.2474 11.9082 16.0952 12.825 15.7988C12.8505 15.7907 12.8735 15.7761 12.8918 15.7565C12.9101 15.7368 12.923 15.7129 12.9293 15.6868C12.9356 15.6608 12.9351 15.6335 12.9279 15.6077C12.9206 15.5819 12.9069 15.5584 12.8879 15.5395L11.0336 13.6855C11.0145 13.6664 10.9907 13.6526 10.9646 13.6454C10.9385 13.6382 10.911 13.6379 10.8848 13.6445C10.5951 13.7147 10.2981 13.7501 10 13.75Z" fill="#8D9496"/>
                        </svg>} 
                    </span>    
                </button>
            </div>


            <hr />
            <div className='continue-with'>
                    <h2 className='text-have-an-account'>Нет аккаунта?</h2>
                    <a href='/reg' className='link'>Зарегистрироваться</a>
            </div>
            <div className='continue-with'>
                <a href='/password' className='link' style={{margin: ''}}>Восстановить пароль</a>
            </div>
            <h2 className='text-continue-with'>
                или продолжить
            </h2>

            <div className='continue-with-button-container'>
                <button className='continue-with-button'>
                    <span>
                        <svg width="20" height="19" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_908_883)">
                        <path d="M24.0078 12.2245C24.0078 11.2412 23.9295 10.5237 23.7598 9.7796H12.7295V14.2176H19.2041C19.0736 15.3205 18.3687 16.9814 16.8022 18.0975L16.7802 18.2461L20.2678 20.9963L20.5095 21.0209C22.7285 18.9347 24.0078 15.8653 24.0078 12.2245Z" fill="#5A96F5"/>
                        <path d="M12.7296 23.9176C15.9016 23.9176 18.5645 22.8545 20.5095 21.0209L16.8023 18.0976C15.8102 18.8018 14.4787 19.2934 12.7296 19.2934C9.6228 19.2934 6.98598 17.2074 6.04603 14.324L5.90825 14.3359L2.2818 17.1927L2.23438 17.3269C4.1663 21.2334 8.13462 23.9176 12.7296 23.9176Z" fill="#3ABB5D"/>
                        <path d="M6.04621 14.324C5.7982 13.5799 5.65466 12.7826 5.65466 11.9588C5.65466 11.1349 5.7982 10.3377 6.03316 9.5936L6.02659 9.43513L2.3547 6.53241L2.23457 6.59058C1.43833 8.21168 0.981445 10.0321 0.981445 11.9588C0.981445 13.8855 1.43833 15.7058 2.23457 17.3269L6.04621 14.324Z" fill="#FBC41E"/>
                        <path d="M12.7295 4.62403C14.9356 4.62403 16.4237 5.59401 17.2722 6.40461L20.5878 3.10928C18.5515 1.1826 15.9015 0 12.7295 0C8.13462 0 4.1663 2.68406 2.23438 6.59056L6.03297 9.59359C6.98597 6.7102 9.62279 4.62403 12.7295 4.62403Z" fill="#ED5A4C"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_908_883">
                        <rect width="23.04" height="24" fill="white" transform="translate(0.980469)"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </span>
                </button>
                <button className='continue-with-button'>
                    <span>
                        <svg width="20" height="19" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_908_890)">
                        <path d="M12.5 0C5.8724 0 0.5 5.3724 0.5 12C0.5 18.6276 5.8724 24 12.5 24C19.1276 24 24.5 18.6276 24.5 12C24.5 5.3724 19.1276 0 12.5 0Z" fill="url(#paint0_linear_908_890)"/>
                        <path d="M14.2281 16.8578H17.4846L17.9961 13.5496H14.2281V11.7414C14.2281 10.3673 14.6773 9.14861 15.9627 9.14861H18.0282V6.26199C17.6652 6.21292 16.8976 6.10596 15.4474 6.10596C12.4186 6.10596 10.6431 7.7053 10.6431 11.3494V13.5503H7.5293V16.8584H10.6424V25.9512C11.259 26.043 11.8838 26.106 12.5249 26.106C13.1044 26.106 13.67 26.0531 14.2281 25.9776V16.8578Z" fill="white"/>
                        </g>
                        <defs>
                        <linearGradient id="paint0_linear_908_890" x1="4.0958" y1="3.5958" x2="22.469" y2="21.969" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#2AA4F4"/>
                        <stop offset="1" stop-color="#007AD9"/>
                        </linearGradient>
                        <clipPath id="clip0_908_890">
                        <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </span>
                </button>
            </div>
        </div>  
    )
}