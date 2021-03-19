import Head from "next/head";
import { useState } from "react";
import Weather from "../components/Weather/Weather";
import WeatherForm from "../components/Form/WeatherForm";
import { fetchWeather } from "../utils/api";

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (location) => {
    // if (!location) return;

    try {
      const fetchedWeather = await fetchWeather(location);
      setWeather(fetchedWeather);
    } catch ({ message }) {
      setError(message);
    }
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Weather weather={weather} error={error} />
        <WeatherForm handleSubmit={handleSubmit} />
      </main>
    </div>
  );
}
