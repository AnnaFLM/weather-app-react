import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function ForecastDay(props) {
  function temperatureMax() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function temperatureMin() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return days[day];
  }

  return (
    <div>
      <div className="day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="forecast-temperature">
        <span className="forecast-tempMax">{temperatureMax()}</span>{" "}
        <span className="forecast-tempMin">{temperatureMin()}</span>
      </div>
    </div>
  );
}
