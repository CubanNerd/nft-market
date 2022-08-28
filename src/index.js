import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
// import App from './App';
// React Router allows me to create a multi page app
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Token from './Token';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <BrowserRouter>
    //   <App />
    // </BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/token' element={<Token/>}/>
      </Routes>
    </BrowserRouter>
);
