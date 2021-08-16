import { Button, Paper, TextField } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { postUser } from '../reducers/appReducer';
import s from '../App.module.css';

function UserAdd({ changeEdit }) {
    const dispatch = useDispatch();
    const [username, setUsername] = React.useState("");
    const [firstname, setFirstname] = React.useState("");
    const [lastname, setLastname] = React.useState("");
    const [password, setPassword] = React.useState("");

    // const checkValue = () => {
    //  if (loginRef.current.value.length < 1 || passwordRef.current.value.length < 1) {
    //    alert("uncorrect data"); 
    //    return false
    //   } else 
    //     return true
    // }

    const sendRequest = () => {
        const data = {
            username: username,
            first_name: firstname,
            last_name: lastname,
            password: password,
            is_active: true
        }
        console.log(data);
        dispatch(postUser(data));
        changeEdit();
    }

    const paperStyle = { padding: 20, height: 400, width: 280, margin: "20px auto"}
    const btnstyle = { padding: 20, margin: '2em auto' }
    return (
        <div >

        <Paper elevation={10} style={paperStyle}>
            <Button style={btnstyle} onClick={() => sendRequest()}  color='primary' >Cancel</Button>
            <TextField size="small" label="enter User Name" variant="outlined" value={username} onChange={(e) => { setUsername(e.target.value) }} type="text" />
            <TextField size="small" label="enter First Name" variant="outlined" value={firstname} onChange={(e) => { setFirstname(e.target.value) }} type="text" />
            <TextField size="small" label="enter Last Name" variant="outlined" value={lastname} onChange={(e) => { setLastname(e.target.value) }} type="text" />
            <TextField size="small" label="enter Password" variant="outlined" value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" />
            <Button style={btnstyle} onClick={() => sendRequest()}  color='primary' >Add new member</Button>
            </Paper>
        </div>
    )
}

export default UserAdd;