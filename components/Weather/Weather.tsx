const Weather = ({ weather }) => {
  // const { weather, isLoading, isError } = useWeather(location);

  return (
    <>
      <p>{weather.name}</p>
      {/* <pre>{JSON.stringify(weather, null, 2)}</pre> */}
    </>
  );
};

export default Weather;
