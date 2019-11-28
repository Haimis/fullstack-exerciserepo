import React, { useState } from 'react'

const Weather = ({weather}) => {
    
    return (
        <div>
            <h2>Weather in {weather.location.name}</h2>
            <p><b>temperature:</b> {weather.current.temperature} Celsius</p>
            <img src={weather.current.weather_icons} />
            <p><b>wind:</b> {weather.current.wind_speed} {weather.current.wind_dir}</p>

        </div>
    )
}


export default Weather