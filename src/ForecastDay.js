import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function temperatureMax() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function temperatureMin() {
    let temperature = Math.round(props.data.temp.max);
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
      <div className="props.data-temperature">
        <span className="props.data-tempMax">{temperatureMax()}</span>{" "}
        <span className="props.data-tempMin">{temperatureMin()}</span>
      </div>
    </div>
  );
}
