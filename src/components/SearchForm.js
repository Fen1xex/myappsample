import React from 'react'
import { useGlobalContext } from '../context'
import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchForm = () => {
  const { query, setQuery } = useGlobalContext()

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <h2>search your drink</h2>
      <div className='form-control'>
        <AiOutlineSearch className='icon' />

        <input
          type='text'
          value={query}
          placeholder='search'
          onChange={(event) => {
            setQuery(event.target.value)
          }}
        />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.form`
  text-align: center;
  margin-bottom: 5rem;
  .icon {
    position: absolute;
    margin: 5px;
  }
  input {
    width: 300px;
    height: 25px;
    border-radius: 5px;
    background: transparent;
    padding-left: 50px;
  }
  input:focus {
    outline: none;
    border-color: orange;
  }
  h2 {
    font-weight: 100;
  }
`

export default SearchForm
