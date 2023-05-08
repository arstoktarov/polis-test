import { React, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../actions/authActions';
import { useNavigate } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";

const RegisterForm = () => {
  const { loading, error, user, success } = useSelector((state) => state.auth);
  const [ validationError, setValidationError ] = useState(null);
  
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(error);
    if (success) {
      navigate('/login');
    }
  });

  const submitForm = (data) => {
    if (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/.test(data.password) == false) {
      setValidationError('Пароль должен символы в разных регистрах и цифры.');
      return;
    }
    dispatch(userRegister(data));
  }

  return (
    <div className='flex flex-col p-2 w-1/3 mt-10'>
      <form onSubmit={handleSubmit(submitForm)}>
            <input
                type="text" 
                required
                className="bg-[#D9D9D9] border border-gray-500 text-black rounded-md block w-full h-[50px] px-4 py-8 text-[20px] opacity-50"
                placeholder="Ваше имя"
                {...register("name")}
            />

            <input 
                type="email" 
                required
                className="bg-[#D9D9D9] border border-gray-500 text-black rounded-md block w-full h-[50px] px-4 py-8 mt-4 text-[20px] opacity-50"
                placeholder="Email"
                {...register("email")}
            />

            <input type="password" 
                required
                className="bg-[#D9D9D9] border border-gray-500 text-black rounded-md block w-full h-[50px] px-4 py-8 mt-4 text-[20px] opacity-50"
                placeholder="Пароль"
                {...register("password")}
            />

            <button 
                type="submit" 
                disabled={loading} 
                className="text-white text-[16px] font-normal opacity-60 bg-[#6C63FF] hover:opacity-100 rounded-lg px-5 py-2.5 mt-4 w-full h-14 flex items-center justify-center">
                {
                  loading ? 
                    <ClipLoader
                      color="white"
                      loading={loading}
                      size={30}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                    :
                    'Зарегистрироваться'
                }
            </button>

            {
              validationError != null ?
              <p className='mt-2 text-red-400 text-[14px]'>{validationError}</p>
              : ""
            }
            {
              error != null ?
              <p className='mt-2 text-red-400 text-[14px]'>{error}</p>
              : ""
            }
      </form>
    </div>
  )
}

export default RegisterForm;