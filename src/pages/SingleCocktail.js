import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  let { id } = useParams()
  const [drink, setDrink] = React.useState({})

  const fetchSingleDrink = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    setDrink(data.drinks[0])
  }

  useEffect(() => {
    fetchSingleDrink(`${url}${id}`)
  }, [id])

  const { strDrink: name, strDrinkThumb: img } = drink

  return (
    <>
      <Navbar />
      <Wrapper>
        <div>
          <img src={img} alt={name} />
          <h4>{name}</h4>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
  div {
    width: 350px;
    height: 350px;
    text-align: center;
  }

  img {
    width: 100%;
  }
`

export default SingleCocktail
