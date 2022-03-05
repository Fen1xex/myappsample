import React from 'react'
import styled from 'styled-components'

const Cocktail = ({ idDrink: id, strDrinkThumb: img, strDrink: name }) => {
  return (
    <Wrapper>
      <img src={img} alt={name} />
      <h5>{name}</h5>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  width: 200px;
  height: 200px;
  border: 2px solid black;
  border-radius: 6px;
  img {
    width: 100%;
  }
  h5 {
    transform: translateY(-120%);
    padding: 10px 10px 10px 10px;
    margin-top: 25px;
    margin-left: 5px;
    border-radius: 5px;
    font-size: 1.5rem;
    color: black;
    width: 50%;
    background: orange;
    text-align: end;
  }
`

export default Cocktail
