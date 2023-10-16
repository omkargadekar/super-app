import React, { useEffect, useState } from "react";
import "./weather.css";
import axios from "axios";
const URL =
  "https://api.weatherapi.com/v1/current.json?key=9769d3b9c4be43f685f115533230210&q=Pune";

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);
  useEffect(() => {
    const getWeatherData = async () => {
      const { data } = await axios.get(URL);
      setWeatherData(data);
    };
    getWeatherData();
  }, []);

  return (
    <div className="weather flex">
      <div className="weather-panel flex">
        <p>{weatherData?.location?.localtime}</p>
      </div>
      <div className="flex weather-d">
        <div className="flex weatherText">
          <img
            className="weather-icon"
            src={weatherData?.current?.condition?.icon}
            alt="weather"
          />
          <p className="p-text-big">{weatherData?.current?.condition?.text}</p>
        </div>
        <div className="flex temp">
          <p className="temp-text">{weatherData?.current?.temp_c}°C</p>
          <div className="flex temp-cont">
            <img className="tempImg" src="/temp.png" alt="temp" />
            <p className="p-text">
              {weatherData?.current?.pressure_mb} mbar <br /> Pressure
            </p>
          </div>
        </div>
        <div className="flex third">
          <div className="flex wind">
            <img src="/wind.png" className="windImg" alt="wind" />
            <p className="p-text">
              {weatherData?.current?.wind_kph} km/h <br /> Wind
            </p>
          </div>
          <div className="flex humidity ">
            <img src="/humidity.png" alt="humidity" className="humidityImg" />
            <p className="p-text">
              {weatherData?.current?.humidity}% <br />
              Humidity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
