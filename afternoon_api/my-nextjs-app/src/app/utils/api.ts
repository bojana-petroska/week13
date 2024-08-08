import axios from "axios";

const API_KEY = 'b5f9635142bb9d2d3bf46b2f92d45631';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (city: string) => {
    const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    console.log(response);
    return response.data;
};

export const fetchWeatherForCities = async (cities: string[]) => {
    try {
        const weatherData = await Promise.all(cities.map(city => fetchWeather(city)));
        console.log(weatherData);
        return weatherData;
    } catch (error) {
        console.error('Error fetching weather data', error);
    }
};

fetchWeather('London');
fetchWeatherForCities(['London', 'New York', 'Tokyo', 'Berlin', 'Skopje']);

