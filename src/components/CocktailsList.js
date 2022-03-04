import React from 'react'
import { useGlobalContext } from '../context'
import styled from 'styled-components'

const CocktailsList = () => {
  const { isLoading } = useGlobalContext()
  if (isLoading) {
    return (
      <Loading>
        <h2>Loading . . .</h2>
      </Loading>
    )
  }
  return <h1>CocktailsList</h1>
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

export default CocktailsList
