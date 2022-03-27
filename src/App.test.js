import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './theme/GlobalStyle'
import Theme from './theme/Theme'
import { Provider } from 'react-redux'
import { store } from './state/store/store'


it("renders without crashing",()=>{
    const div=document.createElement("div")
    ReactDom.render(<ThemeProvider theme={Theme}>
        <GlobalStyle /><Provider store={store}><App/></Provider></ThemeProvider>,div)
})