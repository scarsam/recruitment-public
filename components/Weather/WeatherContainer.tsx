import WeatherCard from "../Card/WeatherCard";
import { convertDate } from "../../utils/convertDate";
// import styles from "./Weather.module.css";

const WeatherContainer = ({ weather, error }) => {
  if (error) {
    return <p>{error}</p>;
  }

  if (!weather) return null;

  const { weather: weatherArray, dt, main, wind } = weather;
  return (
    <WeatherCard
      icon={weatherArray[0]?.icon}
      description={weatherArray[0]?.description}
      day={convertDate(dt)}
      temprature={main?.temp}
      feelsLike={main?.feels_like}
      wind={wind?.speed}
    />
  );
};

export default WeatherContainer;
