import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import Button from '../../components/elements/Button'
import { addToCart } from '../../state/actions/cart'

const RestaurantCard = ({ id, title, price, image, category }) => {
  const product = { id, title, price, image, category }
  const dispatch = useDispatch()

  return (
    <>
      
      <Details>
        <ImageContainer>
          <Image src={image} alt={title} />
        </ImageContainer>
        <Info>
          <Title>{title}</Title>
          <div>Rs.{price.toFixed(2)}</div>
        </Info>
        <Button
          onClick={() => dispatch(addToCart(product))}
          content="Add to cart"
          size="wide"
          color="light"
          animation="color"
        />
      </Details>
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

const ProductCardWrapper = styled.div`
  // display: flex;
  // flex-direction: column;
  // border: 1px solid ${({ theme }) => theme.colors.grey.main};
  // border-radius: 10px;
  // background-color: #fff;
  // font-size: 2rem;
`

const Image = styled.img`
  height: 20rem;
`

const ImageContainer = styled.div`
  // height: 25rem;
  padding: 0.5rem;
  // margin: 0 auto;
`

const Details = styled.div`
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  // gap: 2rem;
  // height: 30rem;

  border: 1px solid ${({ theme }) => theme.colors.grey.main};
  border-radius: 10px;

  cursor:pointer;
  padding:5rem;
  margin: 3rem;  
  // flex: 1 1 px;
  flex-basis: 400px;
  border-top: 1px solid ${({ theme }) => theme.colors.grey.main};
`

const Info = styled.div`
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  // gap: 1rem;
  height: 15rem;

`

const Title = styled.div`
  font-weight: bold;
`

export default RestaurantCard
