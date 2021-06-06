import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      iconUrl: "http://openweathermap.org/img/wn/10d@2x.png",
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      tempMax: Math.round(response.data.main.temp_max),
      tempMin: Math.round(response.data.main.temp_min),
      wind: Math.round(response.data.wind.speed),
    });
  }

  function search() {
    const apiKey = "c383ea970c0b6605f15ecef4e8d3a578";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDeafult();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            className="locationButton"
            type="text"
            placeholder="Enter location"
            autoFocus="on"
            onChange={handleCityChange}
          />{" "}
          <input className="searchButton" type="submit" value="Search" />{" "}
          <input
            className="currentButton"
            type="submit"
            value="Current location"
          />
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
