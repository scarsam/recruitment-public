import styles from "./WeatherCard.module.css";
import { tempToFixed } from "../../utils/tempToFixed";

type CardProps = {
  icon: string;
  description: string;
  day: string;
  temprature: string;
  feelsLike: string;
  wind: string;
};

const WeatherCard = ({
  icon,
  description,
  day,
  temprature,
  feelsLike,
  wind,
}: CardProps): React.ReactElement => {
  return (
    <div className={styles.card}>
      <header>
        <img src={`/icons/${icon}.png`} alt={description} />

        <h2>{description}</h2>
        <time dateTime={day}>{day}</time>
        <h1>{tempToFixed(temprature)}&deg;</h1>
      </header>
      <div className={styles.metaData}>
        <p>Feels like</p>
        <strong>{tempToFixed(feelsLike)}&deg;</strong>
      </div>
      <div className={styles.divider} />
      <div className={styles.metaData}>
        <p>Wind</p>
        <strong>{tempToFixed(wind)}km/j</strong>
      </div>
    </div>
  );
};

export default WeatherCard;
