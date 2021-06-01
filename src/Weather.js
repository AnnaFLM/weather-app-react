import React from "react";

export default function Weather() {
  let weatherData = {
    city: "Berlin",
    date: "Sunday, 21 March 2021",
    time: "20:30",
    temperature: 10,
    description: "cloudy",
    imgUrl: "http://openweathermap.org/img/wn/10d@2x.png",
  };

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
            src={weatherData.imgUrl}
            width="120"
          />
        </div>
      </h2>
      <p>{weatherData.description}</p>
      <br />
    </div>
  );
}
