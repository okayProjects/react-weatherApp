import React from 'react';

const Result = (props) => {
    const { date, city, sunrise, sunset, temp, pressure, wind, error } = props.weather;

    let weatherForecast = null;
    if (!error && city) {

        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

        weatherForecast = (
            <div>
                <h2>Weather forecast for {city} at {date}</h2>
                <h4>Sunrise at: {sunriseTime}</h4>
                <h4>Sunset at {sunsetTime}</h4>
                <h4>Current temperature {temp} &#176;C</h4>
                <h4>Current pressure: {pressure} hPa</h4>
                <h4>Wind: {wind} m/s</h4>

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