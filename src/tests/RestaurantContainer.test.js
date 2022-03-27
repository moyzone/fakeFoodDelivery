import React from "react";
import ReactDom from "react-dom";
import { render } from "@testing-library/react";
import RestaurantContainer from "../pages/Products/RestaurantContainer";
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../theme/GlobalStyle'
import Theme from '../theme/Theme'
import Images from '../assets/images/images';
import TestData from './RestaurantcontainerTestData'

it("renders without crashing",()=>{
    const restaurant={category:'test',restaurant}
    const div=document.createElement("div")
    const images=Images;
    const testData=TestData;

    ReactDom.render(<ThemeProvider theme={Theme}>
        <GlobalStyle />
        <RestaurantContainer restaurant={testData}/>
        </ThemeProvider>,div)
})