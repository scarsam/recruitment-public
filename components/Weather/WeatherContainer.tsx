import WeatherCard from "../Card/WeatherCard";
import MessageCard from "../Card/MessageCard";
import { convertDate } from "../../utils/convertDate";
import { tempToFixed } from "../../utils/tempToFixed";
import { weatherCountry } from "../../utils/weatherCountry";
import { WeatherData } from "../../types/weather";

const WeatherContainer = ({
  weather,
  error,
}: {
  weather: WeatherData;
  error: string;
}) => {
  if (error) return <MessageCard message={error} />;

  if (!weather)
    return (
      <MessageCard message="Enter a location below, to find out the weather" />
    );

  const { weather: weatherArray, dt, main, wind, name, sys } = weather;

  return (
    <WeatherCard
      country={weatherCountry(sys.country)}
      location={name}
      icon={weatherArray[0]?.icon}
      description={weatherArray[0]?.description}
      day={convertDate(dt)}
      temprature={tempToFixed(main?.temp)}
      feelsLike={tempToFixed(main?.feels_like)}
      wind={tempToFixed(wind?.speed)}
    />
  );
};

export default WeatherContainer;
