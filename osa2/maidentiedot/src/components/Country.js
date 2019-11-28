import React from 'react'


const Country = ({countries}) => {
    
    const flag = "https://restcountries.eu/data/" +
     countries[0].alpha3Code.toLowerCase() + ".svg"

    return (
        <div>
            <h1>{countries[0].name}</h1>

            <p>capital {countries[0].capital} </p>
            <p>population {countries[0].population} </p>

            <h2>languages</h2>

            <ul>
                {countries[0].languages.map(language => 
                    <li key={language.name}>{language.name}</li>)}
            </ul>

            <img src={flag} width="20%" height="20%" alt="flag"/>
        </div>
    )
}


export default Country