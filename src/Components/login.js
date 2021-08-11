import React from 'react';
import { useDispatch } from 'react-redux'
import s from '../App.module.css';
import Button from '@material-ui/core/Button';
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
      Login Page
      <div className={s.input}> <input type="text" ref={loginRef} name="loginText" className="login" /></div>
      <div className={s.input}> <input type="password" ref={passwordRef} name="passwordText"  className="Password"/></div>

      <div className={s.input}><Button variant="contained" onClick={sendRequest}>Login</Button></div>
      </div>
  );
}

export default Login;