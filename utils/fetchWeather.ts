async function fetchWeather(location) {
  try {
    const result = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a17480f70f0d4368ad0b5eabd0e37b66`,
    );
    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export { fetchWeather };
