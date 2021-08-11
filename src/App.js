import React, { useEffect } from 'react';
import s from './App.module.css';
import UsersList from './Components/usersList';
import Login from './Components/login';
import { useSelector } from 'react-redux';

function App() {

  useEffect(() => {
    localStorage.setItem("token", "");
  }, [])

  const appState = useSelector((state) => state.toolkit);
  
  return (
    <div className="App">

      <div className={s.content}>
        
        {appState.isAuth ?  <UsersList/> : <Login/>}
      </div>
    </div>
  );
}

export default App;
