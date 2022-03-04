import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <Wrapper>
      <div className='error'>
        <h3>This page does not exist.</h3>
        <Link to='/' className='btn'>
          back home
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 95vh;
  .error {
    text-align: center;
  }
  h3 {
    font-size: 2.25rem;
  }
  .btn {
    color: #fcfcfc;
    background: #373737;
    padding: 0.25rem 0.5rem;
    border-radius: 3px;
    display: inline-block;
    margin-top: 2rem;
  }
  .btn:hover {
    transition: 0.1s;
  }
`

export default Error
