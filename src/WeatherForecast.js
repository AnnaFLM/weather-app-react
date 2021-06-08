import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  let apiKey = "c383ea970c0b6605f15ecef4e8d3a578";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="day">Wed</div>
          <WeatherIcon code="01d" size={36} />
          <div className="forecast-temperature">
            <span className="forecast-tempMax">25°</span>{" "}
            <span className="forecast-tempMin">20°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
