import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../reducers/appReducer';
import UserAdd from './userAdd';
import UserTable from './userTable';
import s from '../App.module.css';


function UsersList() {

  const appState = useSelector((state) => state.toolkit);

  const [users, setUsers] = useState(appState.usersList);
  const [getAdd, setGetAdd] = useState(false);
  const dispatch = useDispatch();

  const sortUsersById = (obj) => {
    let obj1 = [...obj].sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)).map((item) =>({
      ...item,
      statusEditable: false
    }))
    return obj1
  }

  const onHandleChange = (e) => {
    if (e.target.value.length) {
      setUsers(sortUsersById(appState.usersList.filter((user) => (user.username.toLowerCase().includes(e.target.value.toLowerCase())))))
    } else {
      setUsers(sortUsersById(appState.usersList));
    }
  }

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch])

  useEffect(() => {
    setUsers(sortUsersById(appState.usersList));
  }, [appState.usersList])

  if (!appState.usersList || appState.usersList.length === 0) return <p>Нет данных.</p>

  // const changeEditable = (obj) => {
  //   setUsers(users.map((item) =>({
  //     ...item,
  //     statusEditable: true
  //   }))


    // dispatch(deleteUser(e.target.id))
// }
  return (
    <div>
      <div>
        <button onClick={()=> !getAdd ?setGetAdd(true):setGetAdd(false)}>{!getAdd ?"Create member":"Cancel"}</button>
      </div>
        {getAdd?  <UserAdd/> :
      <div><div className={s.formSearch}> 
        <p>&#128269;</p><input type="search" onChange={onHandleChange} /></div>
       <UserTable users={users} /></div>}
    </div>
  )
}

export default UsersList;