import React, { useState } from "react";

const WeatherForm = ({ handleSubmit }) => {
  let [location, setLocation] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(location);
    setLocation("");
  };

  return (
    <div>
      <h2>How's the weather out there?</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter City"
          // maxLength="50"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
};

export default WeatherForm;
