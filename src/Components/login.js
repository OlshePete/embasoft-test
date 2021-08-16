import React from 'react';
import { useDispatch } from 'react-redux'
import s from '../App.module.css';
import { getToken } from '../reducers/appReducer';


function Login() {


  const dispatch = useDispatch();
  let loginRef = React.useRef();
  let passwordRef = React.useRef();
 
  const checkValue = () => {
   if (loginRef.current.value.length < 1 || passwordRef.current.value.length < 1) {
     alert("uncorrect data"); 
     return false
    } else 
      return true
  }

  const sendRequest = () => {
    if (checkValue()){
    const data = {
      username: "test_super",
      password: "Nf<U4f<rDbtDxAPn",
      // username: loginRef.current.value,
      // password: passwordRef.current.value
    };
    dispatch(getToken(data));
  }
  }

  return (
    <div className={s.login}>
      <p>Login Page</p>
      <input type="text" ref={loginRef} name="loginText" className="login" title="enter your login here"/>
      <input type="password" ref={passwordRef} name="passwordText"  className="Password" title="enter your password here"/>
      <button variant="contained" onClick={sendRequest} title="push for login">Login</button>
      </div>
  );
}

export default Login;