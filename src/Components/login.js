import { Avatar, Button, Grid, Paper, TextField, Typography } from '@material-ui/core';

import React from 'react';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import s from '../App.module.css';
import { getToken } from '../reducers/appReducer';


function Login() {

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const dispatch = useDispatch();
  const checkValue = () => {

    //  if (loginRef.current.value.length < 1 || passwordRef.current.value.length < 1) {
    //    alert("uncorrect data"); 
    //    return false
    //   } else 
    return true
  }

  const sendRequest = () => {
    if (checkValue()) {
      const data = {
        username: "test_super",
        password: "Nf<U4f<rDbtDxAPn",
        // username,
        // password
      };
      dispatch(getToken(data));
    }
  }


  const paperStyle = { padding: 20, height: 400, width: 280, margin: "20px auto" }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnstyle = { margin: '2em auto' }
  return (
    <div >
      {/* <input type="text" ref={loginRef} name="loginText" className="login" title="enter your login here"/>
      <input type="password" ref={passwordRef} name="passwordText"  className="Password" title="enter your password here"/>
      <button variant="contained" onClick={sendRequest} title="push for login">Login</button> */}

      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}></Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField
            fullWidth="true"
            onChange={(e) => { setUsername(e.target.value) }}
            value={username}
            name="loginText"
            label='Username'
            placeholder='Enter username'
            fullWidth required
            title="enter your login here"
          />
          <TextField
            fullWidth="true"
            onChange={(e) => { setPassword(e.target.value) }}
            value={password}
            name="passwordText"
            label='Password'
            placeholder='Enter password'
            type='password'
            fullWidth required
            title="enter your password here"
          />
          <Button onClick={sendRequest} title="push for login" type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>

          <Typography >
            <Link href="#" onClick={() => { alert('username: "test_super"  password: "Nf<U4f<rDbtDxAPn"') }}>
              Forgot password ?
                </Link>
          </Typography>

        </Paper>
      </Grid>

    </div>
  );
}

export default Login;