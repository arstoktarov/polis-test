import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../actions/authActions';

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLogout());
  }

  return (
    <div className='flex flex-row justify-between p-10'>
      <ul className='flex flex-row justify-around w-full'>
        <li>
          <a href='/home' className="text-[20px] font-extrabold hover:text-gray-400">CookBook</a>
        </li>
        {
          user ?
            <li>
              <a href='/home' className="text-[20px] hover:text-gray-400">Главная</a>
            </li>
          : ""
        }
        {
          user ?
            <li>
              <a onClick={handleLogout} className="text-[20px] hover:text-gray-400 cursor-pointer">Выйти</a>
            </li>
          : ""
        }
        {
          !user ?
            <li>
              <a href='/login' className="text-[20px] hover:text-gray-400">Вход</a>
            </li>
          : ""
        }
        {
          !user ?
            <li>
              <a href='/register' className="text-[20px] hover:text-gray-400">Регистрация</a>
            </li>
          : ""
        }
      </ul>
    </div>
  )
}

export default Header