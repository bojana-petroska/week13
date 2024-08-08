'use client';
import { fetchWeather, fetchWeatherForCities } from '../utils/api';
import { useState, useEffect } from 'react';

const WeatherComponent = () => {
  const [weather, setWeather] = useState<any>(null);
  const [weatherCities, setWeatherCities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchWeather('Skopje')
      .then((data: any) => {
        setWeather(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error: Error) => {
        setLoading(false);
        setError(error);
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetchWeatherForCities(['London', 'New York', 'Tokyo', 'Berlin', 'Skopje'])
      .then((weatherData) => {
        setWeatherCities(weatherData || []);
        console.log(weatherCities);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
        console.log(error);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>An error happened: {error.message}</p>;
  }

  return (
    <div>
      <p>Weather in {weather?.name}</p>
      <br />
      <p>temperature: {weather?.main.temp}</p>
      <br />
      <p>maximum temperature: {weather?.main.temp_max}</p>
      <br />
      <p>minimum temperature: {weather?.main.temp_min}</p>
      <br />
      <p>feels like: {weather?.main.feels_like}</p>
      <br />
      <p>humidity: {weather?.main.humidity}</p>
      <br />

      <br />
      <div>
        {weatherCities.map((city) => (
          <div key={city.id}>
            <p>Weather in {city.name}</p>
            <br />
            <p>temperature: {city.main?.temp}</p>
            <br />
            <p>maximum temperature: {city.main?.temp_max}</p>
            <br />
            <p>minimum temperature: {city.main?.temp_min}</p>
            <br />
            <p>feels like: {city.main?.feels_like}</p>
            <br />
            <p>humidity: {city.main?.humidity}</p>
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherComponent;
