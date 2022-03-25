import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import Button from '../../components/elements/Button'
import { addToCart } from '../../state/actions/cart'
import './RestaurantCard.css'

const RestaurantCard = ({ id, title, types, ratings,delivery_time, price, image, category }) => {
  const product = { id, title, price, image, category }
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

RestaurantCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string,
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
  color:#1e21e9;
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
  font-size:1.5rem;
`

export default RestaurantCard
