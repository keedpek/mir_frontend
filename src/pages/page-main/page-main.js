import * as React from 'react';
import './page-main.css'
import UserStore from './../../store/store'
import { useEffect } from 'react';
import UserService from '../../services/userApp';
import { observer } from 'mobx-react-lite';

export const PageMain = observer(() =>
{
    /*useEffect(() => {
        if (UserService.getQuest())
        {
            UserService.createQuest();
        }
        UserService.getQuestList();
        console.log(UserStore)
    }, [])*/
    return(
        <div className='page-main'>        
            <div className='app-container'>
                <div className='app-chat'>
                    <div className='app-chat-bar'>
                        <div className='app-chat-bar-likes'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="57" height="56" viewBox="0 0 57 56" fill="none">
                            <rect x="0.5" width="56" height="56" rx="28" fill="#9CA1A3"/>
                            <path d="M35.3144 17.625C30.7498 17.625 28.4997 21.9886 28.4997 21.9886C28.4997 21.9886 26.2497 17.625 21.6851 17.625C17.9754 17.625 15.0377 20.6345 14.9997 24.2257C14.9224 31.6799 21.0979 36.9811 27.8669 41.4361C28.0536 41.5592 28.274 41.625 28.4997 41.625C28.7255 41.625 28.9459 41.5592 29.1326 41.4361C35.9008 36.9811 42.0764 31.6799 41.9998 24.2257C41.9618 20.6345 39.0241 17.625 35.3144 17.625Z" stroke="#F8F8F8" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </div>
                        <div className='app-chat-bar-messages'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="57" height="56" viewBox="0 0 57 56" fill="none">
                            <rect x="0.5" width="56" height="56" rx="28" fill="#9CA1A3"/>
                            <path d="M40.8051 32.5422C40.7348 32.2891 40.8895 31.9375 41.0371 31.6844C41.0822 31.609 41.1315 31.5363 41.1848 31.4664C42.4478 29.5897 43.1233 27.3793 43.1254 25.1172C43.1465 18.6344 37.6762 13.375 30.9121 13.375C25.0129 13.375 20.091 17.3898 18.9379 22.7195C18.7654 23.5095 18.6782 24.3157 18.6777 25.1242C18.6777 31.6141 23.9371 37.0141 30.7012 37.0141C31.777 37.0141 33.2254 36.6906 34.0199 36.4727C34.8145 36.2547 35.602 35.9664 35.8059 35.8891C36.0149 35.8103 36.2364 35.7698 36.4598 35.7695C36.7035 35.7686 36.9449 35.8164 37.1699 35.9102L41.1566 37.3234C41.244 37.3604 41.3365 37.3841 41.4309 37.3938C41.58 37.3938 41.7231 37.3345 41.8286 37.229C41.9341 37.1235 41.9934 36.9804 41.9934 36.8313C41.9885 36.7669 41.9767 36.7032 41.9582 36.6414L40.8051 32.5422Z" stroke="#F8F8F8" stroke-width="2.25" stroke-miterlimit="10" stroke-linecap="round"/>
                            <path d="M15.173 26.3125C14.2508 27.9692 13.8047 29.8487 13.884 31.7432C13.9633 33.6376 14.5649 35.4732 15.6223 37.0471C15.7847 37.2925 15.8761 37.4823 15.848 37.6096C15.8199 37.7369 15.0092 41.9598 15.0092 41.9598C14.9897 42.0587 14.9971 42.1609 15.0306 42.2559C15.0641 42.3509 15.1225 42.4351 15.1997 42.4998C15.3027 42.5819 15.4308 42.6261 15.5625 42.625C15.6329 42.6252 15.7026 42.6108 15.7672 42.5828L19.7194 41.0359C19.9914 40.9287 20.2949 40.9338 20.5632 41.05C21.8949 41.5689 23.3672 41.8938 24.8403 41.8938C26.8169 41.8958 28.7589 41.3745 30.4688 40.3827" stroke="#F8F8F8" stroke-width="2.25" stroke-miterlimit="10" stroke-linecap="round"/>
                        </svg>
                        </div>
                        <div className='app-chat-bar-list'>
                            
                        </div>
                    </div>
                    <div className='app-chat-content'>

                    </div>
                </div>
                <div className='app-pfp'></div>
                <div className='app-bio'>
                    {
                        UserStore.questionare ?
                        JSON.stringify(UserStore.questionare)
                        :
                        "" 
                    }
                </div>
            </div>
        </div>
    )
})