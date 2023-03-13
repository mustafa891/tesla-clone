import React, { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from "./components/Home";
import Header from "./components/Header";
import ModelCar from "./components/model-car";
import Signup from './components/Signup';
import Account from './components/Account';
import { Context } from './context/context';
import { auth } from './firebase';
import Login from './components/Login';

function App() {

  const {user, setUser} = useContext(Context);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        setUser(userAuth)
      }else {
        setUser(null);
      }
    })
  }, [user])


  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/account' element={<Account />} />
        <Route path='/:carName' element={<ModelCar />} /> 
    </Routes>
  );
}

export default App;
