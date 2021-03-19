import WeatherCard from "../Card/WeatherCard";
// import styles from "./Weather.module.css";

const WeatherContainer = ({ weather, error }) => {
  if (error) {
    return <p>{error}</p>;
  }

  if (!weather) return null;

  const { weather: weatherArray, dt, main, wind } = weather;
  return (
    <WeatherCard
      icon={"h"}
      description={weatherArray[0]?.description}
      day={new Date(dt * 1000)}
      temprature={main?.temp}
      feelsLike={main?.feels_like}
      wind={wind?.speed}
    />
  );
};

export default WeatherContainer;
