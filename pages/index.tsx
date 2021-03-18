import Head from "next/head";
import { useState } from "react";
import Weather from "../components/Weather/Weather";
import WeatherForm from "../components/Form/WeatherForm";
import { fetchWeather } from "../utils/fetchWeather";

export default function Home() {
  let [weather, setWeather] = useState(null);

  const handleSubmit = async (location) => {
    setWeather(await fetchWeather(location));
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {weather && <Weather weather={weather} />}
        <WeatherForm handleSubmit={handleSubmit} />
      </main>
    </div>
  );
}
