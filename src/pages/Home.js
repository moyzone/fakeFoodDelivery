import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import homepageImage from '../assets/images/homepage-image.png'
// import underline from '../assets/images/underline.png'
import Button from '../components/elements/Button'
import routes from '../constants/routes.json'
// import './Home.css';
import { useDispatch, useSelector } from 'react-redux'
import { setRestaurants } from '../state/actions/products'
import ProductCard from './Products/ProductCard'
import { v4 as uuidv4 } from 'uuid'
import background from '../assets/images/background.png'
// import underline from '../assets/images/underline.png'


const Home = () => {

    const restaurants = useSelector((state) => state.products)
    const dispatch = useDispatch()
  
    useEffect(() => {
      loadProducts()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      console.log(restaurants);
    }, [])
  
    const loadProducts = async () => {
      dispatch(setProducts(filterProducts(await fetchProducts())))
    }
  
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      let data = await response.json()
      return data
    }
  
    const filterProducts = (restaurants) => {
      return restaurants.filter(
        (restaurant) =>
        restaurant.category === `men's clothing` ||
        restaurant.category === `women's clothing`
      )
    }
    
  
    const productCards = restaurants.map((product) => (
      <ProductCard
        key={uuidv4()}
        id={product.id}
        title={product.title}
        price={product.price}
        image={product.image}
      />
    ))
  return (
    <>
    <div className="sidebar">
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>
    </div>
    <div className="content">
        <SmallMessage> We end your hunger</SmallMessage>
        <BigMessage>In less than 30 mins !</BigMessage>
    </div>
    {/* <HomeWrapper>
      <Message>
        <SmallMessage> We end your hunger</SmallMessage>
        <BigMessage>In less than 30 mins !</BigMessage>
        <Link to={routes.PRODUCTS}>
          <Button
            content="Order now"
            size="big"
            shape="round"
            color="dark"
            animation="scale"
          ></Button>
        </Link>
      </Message>
      <Image src={background} alt="food"></Image>
    </HomeWrapper> */}
      
    </>
  )
}

const Sidebar = styled.div`
    width: 20vw;
    height :100vh;
    position:fixed;
    background-color:${({ theme }) => theme.colors.grey.light};
    float:left;
    box-shadow: 5px 0 10px -2px #888;
    justify-content: center;
`
const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  float: left;
  justify-content: space-between;
  margin-top: 6rem;
  margin-bottom: 20rem;
  padding-left:10rem;
  width:70%;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`

const Message = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;

  animation: fadeIn ease 6s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 1024px) {
    align-items: center;
  }
`

const SmallMessage = styled.div`
  color: ${({ theme }) => theme.colors.grey.dark};
  font-size: 1.9rem;
  font-weight: bold;
  letter-spacing: 0.5rem;
  text-transform: uppercase;

  @media (max-width: 450px) {
    font-size: 1.4rem;
  }
`

const BigMessage = styled.div`
  font-size: 6.4rem;
  font-weight: bold;

  @media (max-width: 1024px) {
    text-align: center;
    margin-bottom: 3rem;
  }

  @media (max-width: 450px) {
    font-size: 5rem;
  }
`

const Underline = styled.img`
  width: 25rem;
  margin-top: -1rem;
  margin-bottom: 3rem;

  @media (max-width: 1024px) {
    display: none;
  }
`

const Image = styled.img`
  width: 75rem;
  animation: fadeIn ease 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 1024px) {
    position: absolute;
    z-index: -1;
    width: 100%;
    opacity: 0.4;
    animation: none;
  }

  @media (max-width: 600px) {
    top: 25rem;
  }
`

export default Home
