import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('a')
  const [cocktails, setCocktails] = useState([])

  return (
    <AppContext.Provider value={{ isLoading }}>{children}</AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
