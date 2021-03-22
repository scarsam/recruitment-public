export type WeatherData = {
  id: number;
  cod: string;
  message?: string;
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  name: string;
  sys: {
    id: number;
    country: string;
  };
  weather: [{ id: number; main: string; description: string; icon: string }];
  wind: { speed: number; deg: number };
};

export type CardProps = {
  country: string;
  location: string;
  icon: string;
  description: string;
  day: string;
  temprature: number;
  feelsLike: number;
  wind: number;
};
