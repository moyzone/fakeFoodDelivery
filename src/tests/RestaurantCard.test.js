import React from "react";
import ReactDom from "react-dom";
import { render,cleanup } from "@testing-library/react";
import RestaurantCard from "../pages/Products/RestaurantCard";
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../theme/GlobalStyle'
import Theme from '../theme/Theme'
import Images from '../assets/images/images';
import { v4 as uuidv4 } from 'uuid'
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const div=document.createElement("div")
const images=Images;

it("renders without crashing",()=>{
    ReactDom.render(<ThemeProvider theme={Theme}>
        <GlobalStyle />
        <RestaurantCard 
                    key={uuidv4()}
                    id={1}
                    title='Test Cat'
                    types='testing, testing, testing'
                    ratings='4'
                    delivery_time='45mins'
                    price='1000'
                    image={images[Math.floor(Math.random() * images.length)]}
        />
        </ThemeProvider>,div)
})

it("renders title correctly",()=>{
    const {getByTestId}=render(<RestaurantCard
        key={uuidv4()}
        id={1}
        title='Test Cat'
        types='testing, testing, testing'
        ratings='4'
        delivery_time='45mins'
        price='1000'
        image={images[Math.floor(Math.random() * images.length)]}
    />)
    expect(getByTestId('titleTest')).toHaveTextContent('Test Cat')
})

it("renders delivery time correctly",()=>{
    const {getByTestId}=render(<RestaurantCard
        key={uuidv4()}
        id={1}
        title='Test Cat'
        types='testing, testing, testing'
        ratings='4'
        delivery_time='45mins'
        price='1000'
        image={images[Math.floor(Math.random() * images.length)]}
    />)
    expect(getByTestId('deliveryTest')).toHaveTextContent('45mins')
})