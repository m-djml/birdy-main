import React, { useEffect, useState } from "react";
import './App.css';
import HomePage from './HomePage';
import Login from "./Login"
import SignUp from "./SignUp"
import ProfilePage from './ProfilePage';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { createContext } from 'react';
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user_actions";
import axios from 'axios';
import FollowPage from "./FollowPage";

export const UserIdContext = createContext();

function App() {

  const [userId, setUserId] = useState(null);
  //dispatch declenche une action
  const dispatch = useDispatch();

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

      if (userId) dispatch(getUser(userId));

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
        <Route path="/following" element={<FollowPage followers={false}/>}/>
        <Route path="/followers" element={<FollowPage followers={true}/>}/>
      </Routes>
    </BrowserRouter>
  </UserIdContext.Provider>

  );
}

export default App;
