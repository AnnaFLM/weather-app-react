import React from "react";

export default function Details() {
  let weatherDetails = {
    humidity: 75,
    tempMax: 12,
    tempMin: 8,
    wind: 7,
  };

  return (
    <div>
      <div className="weather-info">
        <div className="row justify-content-center">
          <div className="col-sm-2">
            <div>
              <i className="fas fa-tint"></i>
            </div>
            <span>{weatherDetails.humidity}</span> %
          </div>
          <div className="col-sm-2">
            <div>
              <i className="fas fa-temperature-high"></i>
            </div>
            <span>{weatherDetails.tempMax}</span>°{" "}
            <span>{weatherDetails.tempMin}</span>
            <span>°</span>
          </div>
          <div className="col-sm-2">
            <div>
              <i className="fas fa-wind"></i>
            </div>
            <span>{weatherDetails.wind}</span> km/h
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
