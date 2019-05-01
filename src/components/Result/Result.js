import React from 'react';
import './Result.module.css';


const Result = (props) => {
    const { date, city, sunrise, sunset, temp, pressure, wind, error } = props.weather;

    let weatherForecast = null;
    if (!error && city) {

        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

        weatherForecast = (
            <div>
                <h2>Weather forecast for <span>{city}</span> on {date}</h2>
                <h4><i className="far fa-sun"></i> Sunrise at: {sunriseTime}</h4>
                <h4><i class="fas fa-sun"></i> Sunset at {sunsetTime}</h4>
                <h4><i class="fas fa-temperature-low"></i> Current temperature {temp} &#176;C</h4>
                <h4><i class="fas fa-wind"></i> Current pressure: {pressure} hPa</h4>
                <h4><i class="fas fa-water"></i> Wind: {wind} m/s</h4>
            </div>
        )
    } else if (error) {
        weatherForecast = <div>{`Sorry ${city} is not in our database`}</div>
    }

    return (
        <>
            {weatherForecast}
        </>
    );
}

export default Result;