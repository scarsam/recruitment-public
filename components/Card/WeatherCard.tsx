import styles from "./WeatherCard.module.css";
import { CardProps } from "../../types/weather";

const WeatherCard = ({
  country,
  location,
  icon,
  description,
  day,
  temprature,
  feelsLike,
  wind,
}: CardProps): React.ReactElement => {
  return (
    <>
      {location === country ? (
        <p className={styles.location}>{location}</p>
      ) : (
        <p className={styles.location}>
          <strong>{location}</strong>, {country}
        </p>
      )}
      <div className={styles.card}>
        <header>
          <img src={`/icons/${icon}.png`} alt={description} />

          <h2>{description}</h2>
          <time dateTime={day}>{day}</time>
          <h1>{temprature}&deg;</h1>
        </header>
        <div className={styles.metaData}>
          <p>Feels like</p>
          <strong>{feelsLike}&deg;</strong>
        </div>
        <div className={styles.divider} />
        <div className={styles.metaData}>
          <p>Wind</p>
          <strong>{wind}km/j</strong>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
