import { WeatherData } from "../types/weather";

async function fetchWeather(location: string): Promise<WeatherData> {
  try {
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=a17480f70f0d4368ad0b5eabd0e37b66`,
    );

    const data: WeatherData = await result.json();

    const statusCode = parseInt(data.cod, 10) ?? false;
    if (
      statusCode === 400 ||
      statusCode === 401 ||
      statusCode === 404 ||
      statusCode === 429
    ) {
      throw Error(data.message);
    }

    return data;
  } catch (err) {
    const error = err.message
      ? err
      : new Error("Server is down, try again later");
    throw error;
  }
}

export { fetchWeather };
