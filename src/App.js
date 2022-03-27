import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header'
import Main from './Components/Main'

export default function App() {
  return(
    <>
      <BrowserRouter>
        <Header/>
        <Main />
      </BrowserRouter>
      </>
  )
}
