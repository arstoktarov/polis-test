import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userLogin, userRegister, getUserByToken } from "../actions/authActions";

const initialState = {
    message: '',
    user: null,
    access_token: null,
    loading: false,
    error: false,
    errorMessage: "",
    success: false,
    authenticated: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: {
        [userLogin.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [userLogin.fulfilled]: (state, { payload }) => {
            state.authenticated = true;
            state.loading = false;
            state.user = payload.user;
            state.access_token = payload.access_token;
        },
        [userLogin.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [userRegister.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [userRegister.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.success = true;
        },
        [userRegister.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
            state.errorMessage = payload.message;
        },
        [getUserByToken.pending]: (state) => {
            console.log('pending getUserByToken');
            state.loading = true;
            state.error = null;
        },
        [getUserByToken.fulfilled]: (state, { payload }) => {
            console.log('true', payload);
            state.authenticated = true;
            state.loading = false;
            state.user = payload;
        },
        [getUserByToken.rejected]: (state, { payload }) => {
            console.log('false');
            state.loading = false;
            state.error = payload;
            localStorage.removeItem('access_token');
        },
        'user/logout': (state, { payload }) => {
            state.loading = false;
            state.error = null;
            state.user = null;
            state.access_token = null;
            localStorage.removeItem('access_token');
        },
    }
});



export default authSlice.reducer;