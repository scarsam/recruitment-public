import styles from "./WeatherCard.module.css";

type CardProps = {
  icon: string;
  description: string;
  day: Date;
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
        <img src={icon} />
        <h2>{description}</h2>
        <time dateTime={day.toUTCString()}>{day.toUTCString()}</time>
        <h1>{temprature}&deg;</h1>
      </header>
      <div className={styles.metaData}>
        <p>Feels like</p>
        <strong>{feelsLike}&deg;</strong>
      </div>
      <div className={styles.divider} />
      <div className={styles.metaData}>
        <p>Wind</p>
        <strong>{wind}</strong>
      </div>
    </div>
  );
};

export default WeatherCard;
