import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageReg } from './pages/page-reg/page-reg';
import { PageLogin } from './pages/page-login/page-login';
import { observer } from 'mobx-react';
import UserStore from './store/store';
import AuthService from './services/userAuth';
import { useEffect } from 'react';
import { PageMain } from './pages/page-main/page-main';

export const App = observer(() =>
{
    useEffect(() =>
    {
        AuthService.getprofile();
    }, [])
    return(
        <div className='app'>        
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<div>404</div>} />
                    <Route path="/" element={
                        UserStore.isAuthorized ?
                        <PageMain />
                        :
                        <div>not auth page label</div>
                    } />
                    <Route path="reg" element=
                    {
                        UserStore.isAuthorized ?
                        <div>
                            <p>AUTHORIZED {UserStore.user.user_id}</p>
                            <p>{UserStore.questionnare.firstname}</p>
                            <p>{UserStore.questionnare.gender}</p>
                            <p>{UserStore.questionnare.about}</p>
                            <p>{UserStore.questionnare.goals}</p>
                            <p>{UserStore.questionnare.age}</p>
                        </div>
                        :
                        <PageReg />
                    } />
                    <Route path="auth" element=
                    {
                        UserStore.isAuthorized ?
                        <div>AUTHORIZED</div>
                        :
                        <PageLogin />
                    } />
                </Routes>
            </BrowserRouter>
        </div>
    )
})