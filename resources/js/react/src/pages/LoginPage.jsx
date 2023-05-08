import React from 'react';
import { Hero, Layout, LoginForm } from '../components';

const LoginPage = () => {


  
  return (
    <Layout>
        <div className='flex flex-row justify-between'>
            <Hero title='Авторизация' description='Войдите в аккаунт.'/>
            <LoginForm />
        </div>
    </Layout>
  )
}

export default LoginPage