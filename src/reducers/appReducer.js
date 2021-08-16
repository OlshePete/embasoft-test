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

export const putUser = createAsyncThunk(
  'appState/putUser',
  async (data) => {
    const response = await apiClient.put(`/api/v1/users/${data.id}/`, data)
    return response.data;
  })

export const deleteUser = createAsyncThunk(
  'appState/deleteUser',
  async (id) => {
    const response = await apiClient.delete(`/api/v1/users/${id}/`)
    return response.data;
  })

export const appReducer = createSlice({
  name: 'toolkit',
  initialState,
  reducers: {
    delUser: (state, action) => {
      console.log('action', action.payload);
      console.log('state.usersList', [...state.usersList]);

    },
    addUsers: (state, action) => {
      state.usersList.push(action.payload)
    },
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

    [postUser.fulfilled]: (state, action) => {
      console.log('Request was sended and new user was added', action.payload);
      state.usersList = [...state.usersList, action.payload];
    },

    [putUser.fulfilled]: (state, action) => {
      console.log('Request was sended and  user was updated', action.payload);
      const user = state.usersList.map((member) => {
        if (member.id === action.payload.id){
          return action.payload 
        }
        return member
      });
      console.log("Test111",user)
      // state.usersList = [...state.usersList,user];
    },

    [deleteUser.fulfilled]: (state, action) => {
      console.log('User was deleted', state);
      console.log('state.usersList', [...state.usersList]);
      // state.usersList = [...state.usersList.filter((n) => {return n.id != id}) action.payload];

      // let memberDelete = usersMembers.filter((n) => {return n.id != id})
    },
  }
})

// Action creators are generated for each case reducer function
export const { addUsers, delUser } = appReducer.actions

export default appReducer.reducer;