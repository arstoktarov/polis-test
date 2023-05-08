import React from 'react';
import { Hero, Layout, RegisterForm } from '../components';

const RegisterPage = () => {
  return (
    <Layout>
        <div className='flex flex-row justify-between'>
            <Hero title='Регистрация' description='Заполните все поля для регистрации.'/>
            <RegisterForm />
        </div>
    </Layout>
  )
}

export default RegisterPage