const Weather = ({ weather, error }) => {
  if (error) {
    return <p>{error}</p>;
  }

  if (!weather) return null;

  return (
    <>
      <p>{weather.name}</p>
      {/* <pre>{JSON.stringify(weather, null, 2)}</pre> */}
    </>
  );
};

export default Weather;
