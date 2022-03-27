import React from "react";
import ReactDom from "react-dom";
import { render } from "@testing-library/react";
import Contact from "./Contact";
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../theme/GlobalStyle'
import Theme from '../theme/Theme'


it("renders without crashing",()=>{
    const div=document.createElement("div")
    ReactDom.render(<ThemeProvider theme={Theme}>
        <GlobalStyle /><Contact/></ThemeProvider>,div)
})