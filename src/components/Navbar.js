import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'

const Navbar = () => {
  return (
    <Wrapper>
      <Nav>
        <div className='title'>
          <Link to='/' className='logo'>
            <i>TheCocktailDB</i>
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
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 5rem;
  background-color: #373737;
  margin-bottom: 3.5rem;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
  max-width: 80vw;
  margin: 0 auto;

  padding: 1.5rem;

  .logo {
    font-size: 2.25rem;
    color: orange;
    padding: 0.2rem 1rem;
  }
  .logo:hover {
    background: orange;
    color: #fcfcfc;
    transition: 0.1s;
  }
  .btn {
    cursor: pointer;
    font-size: 1.5rem;
    padding: 0 0.5rem;
    margin-right: 2.5rem;
    color: #fcfcfc;
  }
  .btn:hover {
    background: orange;
    border-radius: 5px;
    transition: 0.1s;
  }
`

export default Navbar
