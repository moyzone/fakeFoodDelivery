import React from 'react'
import styled from 'styled-components'

const LoadMoreCard = (props) => {

  return (
    <>
      <Details>
         + {props.remaining} MORE 
      </Details>
    </>
  )
}

const Details = styled.div`
  // display: flex;
  flex-direction: row;
  justify-content: center;
  // gap: 2rem;
  // height: 30rem;

  border: 1px solid ${({ theme }) => theme.colors.swiggy};
  border-radius: 10px;

  font-size:5rem;

  padding:5rem;
  margin: 3rem;  
  flex-basis: 500px;
  border-top: 1px solid ${({ theme }) => theme.colors.grey.main};
`
export default LoadMoreCard
