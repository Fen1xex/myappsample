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
  img {
    width: 100%;
  }
`

export default Cocktail
