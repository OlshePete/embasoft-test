import { createAction } from 'redux-actions';
import { GET_TOKEN } from './appActionTypes';


export const getToken = createAction(GET_TOKEN);

export const getT = (data) => ({ type: GET_TOKEN, payload: data });


export const GET_TOKEN = "GET_TOKEN";
export const SET_TOKEN = "SET_TOKEN";
export const SET_LOGIN_TEXT = "SET_LOGIN_TEXT";
export const SET_PASSWORD_TEXT = "SET_PASSWORD_TEXT";

export const getTokenValue = () => ({
    type: actionType.GET_TOKEN
  });
  
  export const setTokenValue = () => ({
    type: actionType.SET_TOKEN
  });
  export const setLoginText = (text) => ({
    type: actionType.SET_LOGIN_TEXT,
    payload: text
  });
  
  export const setPasswordText = (text) => ({
    type: actionType.SET_PASSWORD_TEXT,
    payload: text
  });
  
  
//   export const setText = data => ({
//     type: actionType.SET_TEXT,
//     payload: data
//   });