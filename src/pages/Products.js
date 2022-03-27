import React, { useEffect,useState, useRef } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import { setRestaurants } from '../state/actions/products'
import './products.css';
import RestaurantContainer from './Products/RestaurantContainer'


const Products = () => {
  const restaurants = useSelector((state) => state.restaurants)
  const dispatch = useDispatch()
  const [selectedCat,setSelectedCat]=useState([]);

  const [seeAll,setSeeAll]=useState(false);

  const [showIndex,setShowIndex]=useState(5);

  const catRefs=useRef([]);

  catRefs.current=[];

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
    const response = await fetch('https://cdn.adpushup.com/reactTask.json')
    let data = await response.json()
    return data
  }

  const changeCat = (event,index) => {
    let el=event.target.getAttribute('value');
    let selectedRef;
    catRefs.current.forEach((ref)=>{
      if(ref.getAttribute('value')==el){
        selectedRef=ref
      }
      })
    let fd=selectedRef.offsetTop-100
    console.log(selectedRef.offsetTop-10);
    window.scrollTo({top:fd,behavior:'smooth'})
    setSelectedCat(event.target.getAttribute('value'))
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
  let onlyOnSwiggyRest=[];

  for(let i=0;i<restaurants.length;i++){
      restaurants[i].restaurantList.forEach(element => {
        if(element.isExlusive){
          onlyOnSwiggyRest.push(element);
        }
        restaurantList.push(element);
      });
  }

  let innerSection=[];

  const addToRefs =(el)=>{
    if(el && !catRefs.current.includes(el)){
      catRefs.current.push(el);
    }
  }

  const inputRef=useRef();

  for(let i=0;i<restaurants.length;i++){
    innerSection.push(<><span value={restaurants[i].category} ref={addToRefs}></span><RestaurantContainer restaurant={restaurants[i]}/></>)
  }

  let seeAllRest={
    'category':"See All",
    'restaurantList':restaurantList
  }
  let onlyOnSwiggy={
    'category':"Only on Swiggy",
    'restaurantList':onlyOnSwiggyRest
  }
  innerSection.push(<><span value='Only on Swiggy' ref={addToRefs}></span><RestaurantContainer restaurant={onlyOnSwiggy}/></>)
  innerSection.push(<><span value='See All' ref={addToRefs}></span><RestaurantContainer restaurant={seeAllRest}/></>)


  return (<ProductsWrapper>
    <span></span>
    <div ref={inputRef} className="sidebar">
        <ul>
          {restaurants.map((restaurant,i)=>{
            return <li value={restaurant.category} onClick={changeCat} style={restaurant.category==selectedCat?{color:"white",background: "#e46d47"}:{}}>{restaurant.category}</li>
          })}
          <li value="Only on Swiggy" onClick={changeCat} style={selectedCat=="Only on Swiggy"?{color:"white",background: "#e46d47"}:{}}>Only on Swiggy</li>
          <li value="See All" onClick={changeCat} style={selectedCat=="See All"?{color:"white",background: "#e46d47"}:{}}>See All</li>
        </ul>
    </div>
    <div className='rightComp'>
      {innerSection}
    </div>
    </ProductsWrapper>)
}

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
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
