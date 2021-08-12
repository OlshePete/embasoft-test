import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import s from '../App.module.css';
import { deleteUser } from '../reducers/appReducer';

function UserTable({ users }) {

    const dispatch = useDispatch();

    const [usersMembers, setUsersMembers] = useState(users);
    console.log("USERS", usersMembers)
    useEffect(() => {
        setUsersMembers(users);
    }, [users])

    const onSettingsClick = (id) => {
        console.log("usersMembers",usersMembers)
        const newArr = usersMembers.map((member)=>{
                console.log("member.id",member)
                console.log("id",id)
            if (member.id == id) {   

                return {
                    ...member,
                    statusEditable: member.statusEditable ? false : true
                }         
            }
            return member
        })        
        console.log("newARr",newArr)    
        setUsersMembers(newArr);
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
                </tr>
            </thead>
            <tbody>
                {usersMembers.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        {item.statusEditable ?<td><input value={item.username} /> </td> : <td>{item.username}</td>}
                        {item.statusEditable ?<td> <input value={item.first_name} /> </td>: <td>{item.first_name}</td>}
                        {item.statusEditable ?<td> <input value={item.last_name} /> </td>: <td>{item.last_name}</td>}

                        <td > <div id={item.id} onClick={()=>onSettingsClick(item.id)} className={s.settings} >&#128736;</div></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default UserTable;