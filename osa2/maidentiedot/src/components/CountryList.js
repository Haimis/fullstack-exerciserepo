import React, { useState, useEffect } from 'react'
import Country from './Country'
import Weather from './Weather'
import axios from 'axios'


const CountryList = ({countries}) => {
    const [selected, setSelected] = useState('')
    const [weather, setWeather] = useState([])  

    const names = () => countries.map(country =>
        <div key={country.name}>
            {country.name}
            <button onClick={() => {
                setSelected(country)
            }}>show</button> 
        </div>
    )

    const hook = () => {
        axios
          .get('http://api.weatherstack.com/current?access_key=e3f620bf9d152c3812681766125791f0&query=Washington')
          .then(response => {
                setWeather(response.data)
                console.log(weather)
        })
    }
  
    useEffect(hook, [countries])
  

    
    if (selected === '') {
        if (countries.length > 1 && countries.length < 11) {
            return (
                <div>
                    {names()}
                    
                </div>
            )
        } else if (countries.length === 1) {
            return (
                <div>
                    <Country countries={countries} />
                </div>
            )
    
        } else {
            return (
                <div>
                    <p>Too many matches, specify another filter</p>
                </div>
            )
        }
    } else {
        const country = [selected]
        if (selected.name === 'United States of America') {
            return (
                <div>
                    <Country countries={country} />
                    <Weather weather={weather}/>
                    <button onClick={() => {
                        setSelected('')
                    }}>return</button>
                </div>
            )

        } else {
            return (
                <div>
                    <Country countries={country} />
                    <button onClick={() => {
                        setSelected('')
                    }}>return</button>
                </div>
            )
        }
    }
    

}

export default CountryList