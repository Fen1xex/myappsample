import React from 'react'
import Navbar from '../components/Navbar'
import SearchForm from '../components/SearchForm'
import CocktailsList from '../components/CocktailsList'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <main>
      <Navbar />
      <SearchForm />
      <CocktailsList />
      <Footer />
    </main>
  )
}

export default Home
