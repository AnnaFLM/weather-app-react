import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="day">Wed</div>
          <WeatherIcon code="01d" />
          <div className="forecast-temperature">
            <span className="forecast-tempMax">25</span>
            <span className="forecast-tempMin">20</span>
          </div>
        </div>
      </div>
    </div>
  );
}
