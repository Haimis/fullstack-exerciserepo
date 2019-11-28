import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import CountryList from './components/CountryList'
import axios from 'axios'


const App = () => {
  const [countries, setCountries] = useState([])
  const [newSearch, setNewSearch] = useState('')


  const countriesOnList = newSearch === ''
  ? countries
  : countries.filter(countries => countries.name.toLowerCase()
    .includes(newSearch.toLocaleLowerCase()))

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)

      })
  }
  useEffect(hook, [])
  
  return (
      <div >
        <Search newSearch={newSearch}
          handleSearchChange={handleSearchChange} />
        <CountryList countries={countriesOnList} />
      </div>
  )
}

export default App