import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import SingleCocktail from './pages/SingleCocktail'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>

        <Route path='/about' element={<About />}></Route>

        <Route path='/cocktails/:id' element={<SingleCocktail />}></Route>

        <Route path='*' element={<Error />}></Route>
      </Routes>
    </>
  )
}

export default App
