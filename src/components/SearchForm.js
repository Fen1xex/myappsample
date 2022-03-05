import React from 'react'
import { useGlobalContext } from '../context'
import styled from 'styled-components'

const SearchForm = () => {
  const { query, setQuery } = useGlobalContext()

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <h2>search your drink</h2>
      <input
        type='text'
        value={query}
        onChange={(event) => {
          setQuery(event.target.value)
        }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.form`
  text-align: center;
  margin-bottom: 5rem;
  input {
    width: 300px;
    height: 25px;
    border-radius: 5px;
    background: transparent;
    padding-left: 10px;
  }
  input:focus {
    outline: none;
    border-color: orange;
  }
`

export default SearchForm
