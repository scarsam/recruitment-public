import React, { useState } from "react";
import styles from "./WeatherForm.module.css";

const WeatherForm = ({ handleSubmit }) => {
  let [location, setLocation] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(location);
    setLocation("");
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Enter City"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <button type="submit">Get Weather</button>
    </form>
  );
};

export default WeatherForm;
