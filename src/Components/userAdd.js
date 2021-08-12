import React from 'react';
import { useDispatch } from 'react-redux';
import { postUser } from '../reducers/appReducer';

function UserAdd() {
    const dispatch = useDispatch();
    let usernameRef = React.useRef();
    let firstnameRef = React.useRef();
    let lastnameRef = React.useRef();
    let passwordRef = React.useRef();

    // const checkValue = () => {
    //  if (loginRef.current.value.length < 1 || passwordRef.current.value.length < 1) {
    //    alert("uncorrect data"); 
    //    return false
    //   } else 
    //     return true
    // }

    const sendRequest = () => {
        const data = {
            username: usernameRef.current.value,
            first_name: firstnameRef.current.value,
            last_name: lastnameRef.current.value,
            password: passwordRef.current.value,
            is_active: true
        }
        console.log(data);
        dispatch(postUser(data));
    }

    return (
        <div>
            <p>User Name <input ref={usernameRef} type="text" /></p>
            <p>First Name<input ref={firstnameRef} type="text" /></p>
            <p>Last Name<input ref={lastnameRef} type="text" /></p>
            <p>Password<input ref={passwordRef} type="password" /></p>
            <button onClick={() => sendRequest()}>Add new member</button>
        </div>
    )
}

export default UserAdd;