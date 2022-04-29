import './App.css';
import HomePage from './HomePage';
import Login from "./Login"
import Signin from "./Signin"
import ProfilePage from './ProfilePage';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/homepage" element={<HomePage/>}/>
      <Route path="/" element={<Navigate replace to="/homepage"/>}/>
      <Route path="/register" element={<Signin/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profil" element={<ProfilePage/>}/>
    </Routes>
  </BrowserRouter>

  );
}

export default App;