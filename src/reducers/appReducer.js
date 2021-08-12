import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '../apiClient';

const initialState = {
  isAuth: false,
  usersList: [],
};

export const getToken = createAsyncThunk(
  'appState/getToken',
  async (data) => {
    const response = await apiClient.post('/api-token-auth/', data)
    return response.data;
  })

export const getUsers = createAsyncThunk('appState/getUsers', async () => {
  const response = await apiClient.get('/api/v1/users/');
  return response.data
})

export const postUser = createAsyncThunk(
  'appState/postUser',
  async (data) => {
    const response = await apiClient.post('/api/v1/users/', data)
    return response.data;
  })
  export const deleteUser = createAsyncThunk(
    'appState/deleteUser',
    async (id) => {
      const response = await apiClient.delete(`/api/v1/users/${id}`)
      return response.data;
    })

export const appReducer = createSlice({
  name: 'toolkit',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isAuth = true;
    },
    addUsers: (state, action) => {
      state.usersList.push(action.payload)
    },
    setTokenTest: (state, action) => {
      state.token = action.payload;
    }
  },
  extraReducers: {
    [getToken.fulfilled]: (state, action) => {
      localStorage.setItem('token', action.payload.token);
      state.isAuth = true;
      console.log("Request was sended and token obitaned", localStorage.token);
    },

    [getUsers.fulfilled]: (state, action) => {
      state.usersList = action.payload;
      console.log('Request was sended and data obitaned', action.payload);
    },

    [postUser.fulfilled]: (action) => {
      console.log('Request was sended and new user was added', action.payload);
    },

    [deleteUser.fulfilled]: (action) => {
      console.log('Request was sended and user was deleted', action.payload);
    },
  }
})

// Action creators are generated for each case reducer function
export const { addUsers, setToken  } = appReducer.actions

export default appReducer.reducer;