import Head from "next/head";
import { useState } from "react";
import WeatherContainer from "../components/Weather/WeatherContainer";
import WeatherForm from "../components/Form/WeatherForm";
import Container from "../components/Layout/Container";
import Layout from "../components/Layout/Layout";
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
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <WeatherContainer weather={weather} error={error} />
        <WeatherForm handleSubmit={handleSubmit} />
      </Container>
    </Layout>
  );
}
