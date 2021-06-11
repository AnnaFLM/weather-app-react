import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <br />
      <br />
      <h1>
        <strong>{props.data.city}</strong>
      </h1>
      <p>
        <CurrentDate date={props.data.date} />
        <br />
        {props.data.time}
      </p>
      <br />
      <h2>
        <WeatherTemperature celsius={props.data.temperature} />

        <div>
          <WeatherIcon code={props.data.icon} size={80} />
        </div>
      </h2>
      <p>{props.data.description}</p>
      <br />

      <div className="weather-info">
        <div className="row justify-content-center">
          <div className="col-sm-2">
            <div>
              <i className="fas fa-tint"></i>
            </div>
            <span>{props.data.humidity}</span> %
          </div>
          <div className="col-sm-2">
            <div>
              <i className="fas fa-temperature-high"></i>
            </div>
            <span>{props.data.tempMax}</span>°{" "}
            <span className="tempMin">{props.data.tempMin}</span>
            <span className="degreeSymbol">°</span>
          </div>
          <div className="col-sm-2">
            <div>
              <i className="fas fa-wind"></i>
            </div>
            <span>{props.data.wind}</span> km/h
          </div>
        </div>
      </div>
      <br />
      <hr />
    </div>
  );
}
