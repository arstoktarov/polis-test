import { React, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../actions/authActions';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const { loading, error, user } = useSelector((state) => state.auth);
  
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/home');
    }
  });

  const submitForm = (data) => {
    dispatch(userLogin(data));
  }

  return (
    <div className='flex flex-col p-2 w-1/3 mt-10'>
      <form onSubmit={handleSubmit(submitForm)}>

          <input type="email"
            className="bg-[#D9D9D9] border border-gray-500 text-black rounded-md block w-full h-[50px] px-4 py-8 text-[20px] opacity-50"
            placeholder="Email"
            {...register("email")}
            required />

          <input type="password"
            className="bg-[#D9D9D9] border border-gray-500 text-black rounded-md block w-full h-[50px] px-4 py-8 mt-4 text-[20px] opacity-50"
            placeholder="Пароль"
            {...register("password")}
            required />

            <button type="submit" disabled={loading} 
              className="text-white text-[16px] font-normal opacity-60 bg-[#6C63FF] hover:opacity-100 rounded-lg px-5 py-2.5 mr-2 mt-4 w-full h-14">
                Войти
            </button>
            {
              error ?
              <p className='mt-2 text-red-500'>{error}</p>
              : ""
            }
      </form>
    </div>
  )
}

export default LoginForm