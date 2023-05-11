import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';

const backendURL = 'http://localhost:8000/api/v1';

export const userRegister = createAsyncThunk(
    'auth/register',
    async ({ name, email, password }, { rejectWithValue }) => {
      try {

        console.log({ name, email, password });

        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }

        await axios.post(
          `${backendURL}/auth/register`,
          { name, email, password, password_confirmation: password },
          config
        )

      } catch (error) {

        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }

      }
    }
)

export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }
        const { data } = await axios.post(
          `${backendURL}/auth/login`,
          { email, password },
          config
        )

        console.log('userdata', data);

        if (data.access_token) {
          localStorage.setItem('access_token', data.access_token);
        }

        return data;

      } catch (error) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
)

export const getUserByToken = createAsyncThunk(
  'auth/getUserByToken',
  async ({access_token}, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + access_token,
        },
      }

      console.log(config);
      const { data } = await axios.get(
        `${backendURL}/auth/me`,
        config
      )

      console.log('me', data);

      console.log('getUserByToken', data);

      if (data.access_token) {
        localStorage.setItem('access_token', data.userToken);
      }

      return data;

    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const userLogout = createAction('user/logout');
