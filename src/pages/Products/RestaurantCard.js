import React from 'react'
import styled from 'styled-components'
import './RestaurantCard.css'

const RestaurantCard = ({ id, title, types, ratings,delivery_time, price, image, category }) => {


  return (
    <>
      <MainDiv>
        <ImageContainer>
           <Image src={image} alt={title} />
        </ImageContainer>
        <Info>
           <Title data-testid="titleTest">{title}</Title>
           <Types>{types.toString()}</Types>
           <br/>
           <LastInfo>
           <span>&#9733;{ratings?ratings:'--'}</span>
           <span data-testid="deliveryTest">{delivery_time}</span>
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
  height: 30rem;
`

const ImageContainer = styled.div`
`
const QuickView = styled.div`
  // flex-direction: column;
  justify-content: center;
  height: 15rem;
  border-top: 1px outset #e6e6e6;
  display:none;
  color:#413ece;
  text-shadow: 1px 1px 1px #969696;
`

const MainDiv = styled.div`
    cursor:pointer;
    padding:5rem;
    margin: 1rem;  
    flex-basis: 45rem;
    height: 55rem;

    &:hover{
      box-shadow: 0.1px 0.5px 2px 0.5px rgb(107, 107, 107);
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
