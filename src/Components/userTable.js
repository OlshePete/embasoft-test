import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import s from '../App.module.css';
import { delUser, putUser, deleteUser } from '../reducers/appReducer';

function UserTable({ users }) {

    const dispatch = useDispatch();

    const [usersMembers, setUsersMembers] = useState(users);
    const [userForChange, setUserForChange] = useState();

    let usernameRef = React.useRef();
    let firstnameRef = React.useRef();
    let lastnameRef = React.useRef();

    console.log("USERS", usersMembers)
    useEffect(() => {
        setUsersMembers(users);
    }, [users])

    const onSettingsClick = (id) => {
        console.log("usersMembers", usersMembers)
        const newArr = usersMembers.map((member) => {
            if (member.id === id) {
                setUserForChange({ ...member });
                return {
                    ...member,
                    statusEditable: member.statusEditable ? false : true
                }
            }
            return {
                ...member,
                statusEditable: false,
            }
        })
        console.log("newARr", newArr)
        setUsersMembers(newArr);
    }

    const onConfirmClick = (id) => {
        let years = prompt(`Enter password for user ${userForChange.username}`);
        console.log("onConfirmClick usersMembers", id)
        console.log("onConfirmClick usersMembers to ", userForChange)

        const data = {
            id: userForChange.id,
            username: userForChange.username,
            first_name: userForChange.first_name,
            last_name: userForChange.last_name,
            password: years,
            is_active: true

        }
        dispatch(putUser(data));
        console.log("data", data)

    }



    const onDeleteClick = (id) => {
        console.log("usersMembers", usersMembers);
        let memberDelete = usersMembers.filter((n) => { return n.id !== id });
        console.log("dispatch", dispatch);
        dispatch(deleteUser(id));
        setUsersMembers(memberDelete);
        delUser(id);
    }
    const onChangeCurrentInput = (e) => {
        console.log("userForChange", userForChange);
        let value = {}
        switch (e.target.name) {
            case "username":
                value = {
                    ...userForChange,
                    username: e.target.value,
                };
                setUserForChange(value);
                break;

            case "first_name":
                value = {
                    ...userForChange,
                    first_name: e.target.value,
                };
                setUserForChange(value);
                break;

            case "last_name":
                value = {
                    ...userForChange,
                    last_name: e.target.value,
                };
                setUserForChange(value);
                break;

            default:
                break;
        }
    }


    return (
        <table className="UsersList" border="1" width="100%" bgcolor="#FFFFFF"
            bordercolor="#000000" cellSpacing="0" cellPadding="2" >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>User Name</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {usersMembers.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        {item.statusEditable ? <td> <input onChange={onChangeCurrentInput} name="username" className={s.settingInput} ref={usernameRef} value={userForChange.username} placeholder={item.username} type="text" /> </td> : <td>{item.username}</td>}
                        {item.statusEditable ? <td> <input onChange={onChangeCurrentInput} name="first_name" className={s.settingInput} ref={firstnameRef} value={userForChange.first_name} placeholder={item.first_name} type="text" /> </td> : <td>{item.first_name}</td>}
                        {item.statusEditable ? <td> <input onChange={onChangeCurrentInput} name="last_name" className={s.settingInput} ref={lastnameRef} value={userForChange.last_name} placeholder={item.last_name} type="text" /> </td> : <td>{item.last_name}</td>}

                        <td>
                            {item.statusEditable ? <div onClick={() => onConfirmClick(item.id)} className={s.settings} >&#9989;</div> : <div title="edit current member" onClick={() => onSettingsClick(item.id)} className={s.settings} >&#9998;</div>}
                        </td>
                        <td>
                            {item.statusEditable ? <div onClick={() => onSettingsClick(item.id)} className={s.settings} >&#10060;</div> : <div title="delete current member" id={item.id} onClick={() => onDeleteClick(item.id)} className={s.settings} >&#128465;</div>}

                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default UserTable;