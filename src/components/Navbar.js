import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Nav>
      <div className='title'>
        <Link to='/' className='logo'>
          TheCocktailBar
        </Link>
      </div>
      <div>
        <Link to='/' className='btn'>
          Home
        </Link>
        <Link to='/about' className='btn'>
          About
        </Link>
      </div>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3.5rem;
  padding: 1.5rem;
  background-color: #373737;

  .logo {
    font-size: 2.25rem;
    color: orange;
  }
  .btn {
    cursor: pointer;
    font-size: 1.5rem;
    padding: 0 0.5rem;
    color: #fcfcfc;
  }
  .btn:hover {
    color: #737373;
    transition: 0.1;
  }
`

export default Navbar
