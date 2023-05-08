import React from 'react'
import { Layout, Hero } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserByToken } from '../actions/authActions';

const HomePage = () => {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(user);
        if (!user) navigate('/login');
    }, [user]);

    return (
        <Layout>
            <div>
                <Hero title={`Добро пожаловать ${user?.name ?? ''}!`} description='Если вы видите это сообщение, значит вы успешно вошли в аккаунт.'/>
            </div>
        </Layout>
    )
}

export default HomePage