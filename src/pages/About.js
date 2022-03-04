import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <main>
      <Navbar />
      <Wrapper>
        <h3>About us</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti,
          quibusdam? Minima numquam modi porro totam amet nemo in? Aut facere
          consequuntur iste saepe maxime! Cupiditate perspiciatis quidem
          tempora! Laborum, fugiat neque. Itaque unde debitis, dolore
          dignissimos in eaque doloribus ut rerum amet, consectetur nobis? Quo
          praesentium unde eos culpa deserunt?
        </p>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  width: 70vw;
  max-width: 1170px;
  margin: 10rem auto;
  line-height: 1.5rem;
  letter-spacing: 0.15rem;
  text-align: center;
`

export default About
