import React from 'react';
import Question from "./components/Question";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Registro from './components/Registro';
import Statistics from './components/Statistics';
import Admin from './components/Admin';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Registro />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/question" element={<Question />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
