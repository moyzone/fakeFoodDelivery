import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from './Products/ProductCard'
import LoadMoreCard from './Products/LoadMoreCard'

import { setRestaurants } from '../state/actions/products'
import './products.css';
import Images from '../assets/images/images';

const Products = () => {
  const restaurants = useSelector((state) => state.restaurants)
  const dispatch = useDispatch()
  const [selectedCat,setSelectedCat]=useState([]);

  const images=Images;

  const [seeAll,setSeeAll]=useState(false);

  useEffect(() => {
    loadProducts()
  }, [])

  useEffect(() => {
    if(restaurants.length!=0){
      setSelectedCat(restaurants[0].category);
    }
  }, [restaurants])

  const loadProducts = async () => {
    dispatch(setRestaurants(filterProducts(await fetchProducts())))
  }

  const fetchProducts = async () => {
    const response = await fetch('http://cdn.adpushup.com/reactTask.json')
    let data = await response.json()
    console.log(data)
    return data
  }

  const changeCat = (event) => {
    if(event.target.getAttribute('value')=="See All"){
      setSeeAll(true);
      setSelectedCat(event.target.getAttribute('value'));
    }
    else{
      setSelectedCat(event.target.getAttribute('value'));
    }
  }

  const filterProducts = (restaurants) => {
    return restaurants.filter(
      (restaurant) =>
      restaurant.category === `popular brands` ||
      restaurant.category === `offers near you` ||
      restaurant.category === `Express delivery` ||
      restaurant.category === `Gourmet`
    )
  }

  let restaurantList=[];

  for(let i=0;i<restaurants.length;i++){
    if(selectedCat=="See All"){
      restaurants[i].restaurantList.forEach(element => {
        restaurantList.push(element);
      });
    }else if(selectedCat=="Only on Swiggy"){
      for(let j=0;j<restaurants[i].restaurantList.length;j++){
        if(restaurants[i].restaurantList[j].isExlusive){
          restaurantList.push(restaurants[i].restaurantList[j])
        }
      }
    }else{
      if(restaurants[i].category==selectedCat){
        restaurantList=restaurants[i].restaurantList;
        break;
      }
    }
  }
  console.log(restaurantList)


  let restaurantCards = restaurantList.map((restaurantItem) => (
    
    <ProductCard
      key={uuidv4()}
      id={1}
      title={restaurantItem.name}
      price={restaurantItem.price_for_two}
      image={images[Math.floor(Math.random() * images.length)]}
    />
  ))

  const loadMoreCards=<LoadMoreCard/>

  return (<ProductsWrapper>
    <div className="sidebar">
        <ul>
          {restaurants.map((restaurant,i)=>{
            return <li value={restaurant.category} onClick={changeCat} style={restaurant.category==selectedCat?{color:"#e79e00"}:{}}>{restaurant.category}</li>
          })}
          <li value="Only on Swiggy" onClick={changeCat}>Only on Swiggy</li>
          <li value="See All" onClick={changeCat}>See All</li>
        </ul>
    </div>
    <div className='rightComp'>
      {restaurantCards}
      <LoadMoreCard remaining={3}/>
    </div>
    </ProductsWrapper>)
}

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr  4fr;
  gap: 2rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(28rem, 36rem));
    justify-content: center;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 36rem);
  }

  animation: fadeIn ease 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export default Products
