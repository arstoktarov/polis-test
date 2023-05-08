import React, { useEffect } from 'react';

import { samurai } from './assets';
import { Hero, LoginForm, Layout, Header } from './components';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getUserByToken } from './actions/authActions';

const App = () => {
  const { user, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  useEffect(() => {
    const access_token = localStorage.getItem('access_token');
    console.log('access_token', access_token);
    if (access_token && !user) {
        dispatch(getUserByToken({ access_token }));
    }
  }, []);

  useEffect(() => {
    if (user) navigate('/home');
  }, [user]);

  return (
    <Routes>
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/register" element={<RegisterPage />} />
      <Route exact path="/home" element={<HomePage />} />
    </Routes>
  )
}

export default App;