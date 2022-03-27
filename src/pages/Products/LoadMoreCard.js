import React from 'react'
import styled from 'styled-components'

const LoadMoreCard = (props) => {

  if(props.remaining<1){
    return <></>;
  }
  return (
    <>
      <Details onClick={props.func}>
         <TextContainer>+ {props.remaining>3?3:props.remaining} MORE </TextContainer>
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
  flex-direction: row;  
  border: 5px solid ${({ theme }) => theme.colors.swiggy};
  color: ${({ theme }) => theme.colors.swiggy};
  font-size:5rem;

  cursor:pointer;
  padding:5rem;
  margin: 3rem;  
  flex-basis: 250px;
`
export default LoadMoreCard
