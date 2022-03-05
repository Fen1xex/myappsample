import React from 'react'
import styled from 'styled-components'
import { AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <Wrapper>
      <Basement>
        <p className='title'>
          <a href='https://github.com/Fen1xex'>
            made by<span> Fen1xex</span>
            <AiFillGithub className='icon' />
          </a>
        </p>
      </Basement>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: #373737;
  height: 7rem;
  margin-top: 5rem;
  width: 100%;
`

const Basement = styled.footer`
  width: 80vw;
  margin: 0 auto;
  text-align: center;
  color: #fcfcfc;
  .title {
    padding-top: 2rem;
  }
  a {
    color: #fcfcfc;

    width: 100%;
    padding: 0.7rem 1.5rem 0rem 0.5rem;
    position: relative;
  }
  .icon {
    font-size: 2rem;
    position: absolute;
    top: 50%;
    color: orange;

    transform: translate(-0%, -50%);
  }
  span {
    color: orange;
    font-size: 1.5rem;
    padding-right: 0.5rem;
  }
`

export default Footer
