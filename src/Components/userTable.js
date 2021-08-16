import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import s from '../App.module.css';
import { delUser, putUser, deleteUser } from '../reducers/appReducer';

function UserTable({ users }) {

    const dispatch = useDispatch();

    const [usersMembers, setUsersMembers] = useState(users);
    const [userForChange, setUserForChange] = useState();

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
        <div>
            <TableContainer >
                <Table className={s.table} aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID</TableCell>
                            <TableCell align="center">User Name</TableCell>
                            <TableCell align="center">First Name</TableCell>
                            <TableCell align="center">Last Name</TableCell>
                            <TableCell align="center" ></TableCell>
                            <TableCell align="center" ></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {usersMembers.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell align="center">{row.id}</TableCell>
                                {row.statusEditable ? <TableCell align="center"> <input onChange={onChangeCurrentInput} name="username" className={s.settingInput} value={userForChange.username} placeholder={row.username} type="text" /> </TableCell> : <TableCell>{row.username} </TableCell> }
                                {row.statusEditable ? <TableCell align="center"> <input onChange={onChangeCurrentInput} name="first_name" className={s.settingInput} value={userForChange.first_name} placeholder={row.first_name} type="text" /> </TableCell> : <TableCell>{row.first_name} </TableCell> }
                                {row.statusEditable ? <TableCell align="center"> <input onChange={onChangeCurrentInput} name="last_name" className={s.settingInput}  value={userForChange.last_name} placeholder={row.last_name} type="text" /> </TableCell> : <TableCell>{row.last_name} </TableCell> }
                                {row.statusEditable ? <TableCell className={s.setting} onClick={() => onConfirmClick(row.id)} >&#9989;</TableCell> : <TableCell className={s.setting} title="edit current member" onClick={() => onSettingsClick(row.id)} >&#9998;</TableCell>}
                                {row.statusEditable ? <TableCell className={s.setting} onClick={() => onSettingsClick(row.id)} >&#10060;</TableCell> : <TableCell className={s.setting} title="delete current member" id={row.id} onClick={() => onDeleteClick(row.id)} >&#128465;</TableCell>}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default UserTable;