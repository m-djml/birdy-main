import React, { useEffect, useState } from "react";
import './App.css';
import HomePage from './HomePage';
import Login from "./Login"
import SignUp from "./SignUp"
import ProfilePage from './ProfilePage';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { createContext } from 'react';
import axios from 'axios';

export const UserIdContext = createContext();

function App() {

  const [userId, setUserId] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      await axios ({
        method : "get",
        url: "http://localhost:8080/auth",
        withCredentials: true,
      })
        .then((res) => {
          console.log(res.data);
          setUserId(res.data);
        })
        .catch((err) => console.log("No token"));
      }
      fetchData();

  }, [userId]);

  return (
    <UserIdContext.Provider value={userId}>
      <BrowserRouter>
      <Routes>
        <Route path="/homepage" element={<HomePage/>}/>
        <Route path="/" element={<Navigate replace to="/homepage"/>}/>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profil" element={<ProfilePage/>}/>
      </Routes>
    </BrowserRouter>
  </UserIdContext.Provider>

  );
}

export default App;
