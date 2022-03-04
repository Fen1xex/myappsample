import React from 'react'
import { useGlobalContext } from '../context'
import styled from 'styled-components'
import Cocktail from './Cocktail'

const CocktailsList = () => {
  const { isLoading, drinks } = useGlobalContext()
  if (isLoading) {
    return (
      <Loading>
        <h2>Loading . . .</h2>
      </Loading>
    )
  }
  if (!drinks) {
    return (
      <Error>There is no drinks matched your search. Please, try again.</Error>
    )
  }
  return (
    <Wrapper>
      {drinks.map((item) => {
        return <Cocktail key={item.idDrink} {...item} />
      })}
    </Wrapper>
  )
}

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20rem;
  h2 {
    font-weight: 100;
    letter-spacing: 0.25rem;
  }
`

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2.75rem;
  width: 75vw;
  max-width: 75vw;
  margin: 0 auto;
`

const Error = styled.h4`
  text-align: center;
`

export default CocktailsList
