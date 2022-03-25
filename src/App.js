import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header'
import Main from './components/Main'
import Cart from './components/Cart'

export default function App() {
  return(
    <>
      <BrowserRouter>
        <Header/>
        <Main />
      </BrowserRouter>
      <Cart/>
      </>
  )
}
