import React from 'react';
import { Routes,Route } from 'react-router';
import './App.css'
import axios from 'axios';
axios.defaults.withCredentials = true; // SUPER IMPORTANT
axios.defaults.baseURL = 'http://localhost:5000'; // or your backend URL

import MainRouter from './ReactRouter.jsx/MainRouter';


function App() {


  return (
    <>
      <MainRouter/>

    </>
  )
}

export default App
