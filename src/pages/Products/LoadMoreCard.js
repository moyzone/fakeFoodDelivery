import React from 'react'
import styled from 'styled-components'

const LoadMoreCard = (props) => {

  return (
    <>
      <Details>
         <TextContainer>+ {props.remaining} MORE </TextContainer>
      </Details>
    </>
  )
}


const TextContainer = styled.div`
  // height: 25rem;
  padding: 10rem;
  margin: 0 auto;
`

const Details = styled.div`
  // display: flex;
  flex-direction: row;
//   justify-content: center;
//   align-content: center;
  // gap: 2rem;
  // height: 30rem;

  border: 1px solid ${({ theme }) => theme.colors.swiggy};
  border-radius: 10px;

  font-size:5rem;

  cursor:pointer;
  padding:5rem;
  margin: 3rem;  
  flex-basis: 400px;
  border-top: 1px solid ${({ theme }) => theme.colors.grey.main};
`
export default LoadMoreCard
