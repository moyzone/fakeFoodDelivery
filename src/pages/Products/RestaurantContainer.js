import React, {useState} from 'react'
import styled from 'styled-components'
import './RestaurantContainer.css'
import RestaurantCard from './RestaurantCard'
import LoadMoreCard from './LoadMoreCard'
import { v4 as uuidv4 } from 'uuid'
import Images from '../../assets/images/images';



const RestaurantContainer = ({ restaurant }) => {
    const images=Images;
    const [showIndex,setShowIndex]=useState(5);

    const changeShowIndex=()=>{
        setShowIndex((prev)=>prev+3);
      }
    
    return (
    <>
        <div>
        <h1 className='catName'>{restaurant.category}</h1>
        <div className="restaurantsSec" >
            {
                restaurant.restaurantList.slice(0,showIndex).map((restaurantItem)=>{
                    return (<RestaurantCard
                    key={uuidv4()}
                    id={1}
                    title={restaurantItem.name}
                    types={restaurantItem.food_types}
                    ratings={restaurantItem.ratings}
                    delivery_time={restaurantItem.delivery_time}
                    price={restaurantItem.price_for_two}
                    image={images[Math.floor(Math.random() * images.length)]}
                  />)
                })
            }
            <LoadMoreCard func={changeShowIndex} remaining={restaurant.restaurantList.length-showIndex}/>
        </div>
        </div>
       
    </>
  )
}



export default RestaurantContainer
