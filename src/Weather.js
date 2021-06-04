import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: "Friday, 4 June, 16:00",
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/10d@2x.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <br />
        <br />
        <h1>
          <strong>{weatherData.city}</strong>
        </h1>
        <p>
          {weatherData.date}
          <br />
          {weatherData.time}
        </p>
        <br />
        <h2>
          <span>{weatherData.temperature}</span>
          <span className="degrees"> °C </span>
          <div>
            <img
              alt={weatherData.description}
              src={weatherData.iconUrl}
              width="120"
            />
          </div>
        </h2>
        <p>{weatherData.description}</p>
        <br />
      </div>
    );
  } else {
    const apiKey = "c383ea970c0b6605f15ecef4e8d3a578";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
