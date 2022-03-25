import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../state/actions/cart'
import './RestaurantCard.css'

const RestaurantCard = ({ id, title, types, ratings,delivery_time, price, image, category }) => {
  const dispatch = useDispatch()

  console.log(types.toString());

  return (
    <>
      <MainDiv>
        <ImageContainer>
           <Image src={image} alt={title} />
        </ImageContainer>
        <Info>
           <Title>{title}</Title>
           <Types>{types.toString()}</Types>
           <br/>
           <LastInfo>
           <span>&#9733;{ratings?ratings:'--'}</span>
           <span>{delivery_time}</span>
           <span>Rs.{price} for two</span>
            </LastInfo>
         </Info>
         <QuickView>
            Quick View
        </QuickView>
      </MainDiv>
    </>
  )
}


const Image = styled.img`
  height: 20rem;
`

const ImageContainer = styled.div`
  padding: 0.5rem;
`
const QuickView = styled.div`
  // flex-direction: column;
  justify-content: center;
  height: 15rem;
  border-top: 2px outset rgb(148, 147, 147);
  display:none;
  color:#413ece;
  text-shadow: 1px 1px 1px #969696;
`

const MainDiv = styled.div`
    border-radius: 10px;
    cursor:pointer;
    padding:5rem;
    margin: 3rem;  
    flex-basis: 40rem;
    height: 50rem;

    &:hover{
      box-shadow: 1px 1px 15px 1px rgb(107, 107, 107);
    }

    &:hover ${QuickView} {
      display: flex;
    }
`

const Info = styled.div`
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  // gap: 1rem;
  height: 15rem;

`

const LastInfo = styled.div`
  display: flex;
  // flex-direction: column;
  justify-content: space-between;
  // gap: 1rem;
  height: 15rem;

`

const Title = styled.div`
  font-weight: bold;
`

const Types=styled.div`
  height:3rem;
  font-size:1.5rem;
`

export default RestaurantCard
