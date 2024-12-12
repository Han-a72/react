import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState("");

  useEffect(() => {
    if (location) {
      fetchWeatherData(location);
    }
  }, [location]);

  const fetchWeatherData = async (location) => {
    try {
      const apiKey = "d6e5075e12878e8970cc29dd8a5aca51";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
      );
      const { main, wind, weather } = response.data;
      setWeather({
        temp: Math.round(main.temp),
        feelsLike: Math.round(main.feels_like),
        humidity: main.humidity,
        windSpeed: wind.speed,
        description: weather[0].description,
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="weather-container">
      <div className="header">
        <input
          type="text"
          placeholder="Enter Location"
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.target.value.trim() !== "") {
              setLocation(e.target.value);
            }
          }}
        />
      </div>
      {weather ? (
        <div>
          <div className="weather-info">
            <div className="location-temp">
              <h1>{location}</h1>
              <h2>{weather?.temp}°</h2>
            </div>
            <div className="description">
              <p>{weather?.description}</p>
            </div>
          </div>
          <div className="details">
            <div className="weather-detail">
              <p>{weather?.feelsLike}°</p>
              <span>Feels Like</span>
            </div>
            <div>
              <p>{weather?.humidity}%</p>
              <span>Humidity</span>
            </div>
            <div>
              <p>{weather?.windSpeed} KPH</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>
      ) : (
        <p>Enter a location to see the weather.</p>
      )}
    </div>
  );
};

export default Weather;
