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
    console.log(data.drinks[0])
    setDrink(data.drinks[0])
  }

  useEffect(() => {
    fetchSingleDrink(`${url}${id}`)
  }, [id])

  const {
    strDrink: name,
    strDrinkThumb: img,
    strCategory: category,
    strAlcoholic: alcoholic,
    strGlass: glass,
    strInstructions: instructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  } = drink

  const ingridients = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  ]

  return (
    <>
      <Navbar />
      <Wrapper>
        <div>
          <img src={img} alt={name} />
          <div className='start'>
            <h4>
              <span>name:</span> {name}
            </h4>
            <h4>
              <span>alcoholic:</span> {alcoholic}
            </h4>
            <h4>
              <span>category:</span> {category}
            </h4>
            <h4>
              <span>glass:</span> {glass}
            </h4>
            <p className='start'>
              <span>ingridients: </span>
              {ingridients.map((item, index) => {
                return item ? <h5 key={index}>{item}</h5> : null
              })}
            </p>
            <p>
              <span>instruction:</span> {instructions}
            </p>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 350px;
    height: 350px;
    text-align: center;
  }

  img {
    width: 100%;
    margin-bottom: 1.5rem;
    border: 2px orange solid;
    border-radius: 5px;
  }

  h4 {
    font-weight: 100;
    margin-bottom: 1.2rem;
  }

  h5 {
    font-weight: 100;
    font-size: 1rem;
  }

  span {
    background-color: orange;
    padding: 0.15rem 0.3rem;
    color: #fcfcfc;
    border-radius: 3px;
  }

  .start {
    text-align: start;
  }

  p {
    letter-spacing: 0.15rem;
  }
`

export default SingleCocktail
