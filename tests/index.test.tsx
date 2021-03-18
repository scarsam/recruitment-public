import { render, screen, fireEvent } from "@testing-library/react";
import App from "../pages/index";

jest.mock("../utils/fetchWeather", () => {
  return {
    fetchWeather: jest.fn().mockImplementation(() => {
      return {
        coord: {
          lon: 18.0649,
          lat: 59.3326,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d",
          },
        ],
        base: "stations",
        main: {
          temp: 271.69,
          feels_like: 267.34,
          temp_min: 270.93,
          temp_max: 273.15,
          pressure: 1019,
          humidity: 80,
        },
        visibility: 10000,
        wind: {
          speed: 2.57,
          deg: 280,
        },
        clouds: {
          all: 40,
        },
        dt: 1616046703,
        sys: {
          type: 1,
          id: 1788,
          country: "SE",
          sunrise: 1616043317,
          sunset: 1616086579,
        },
        timezone: 3600,
        id: 2673730,
        name: "Stockholm",
        cod: 200,
      };
    }),
  };
});

describe("App", () => {
  it("fetches the weather and prints the data", async () => {
    const { findByText, getByText } = render(<App />);

    // Find the button to retrieve the books
    const button = getByText("Get Weather");
    expect(button).toBeInTheDocument();

    // Actually click the button.
    fireEvent.click(button);

    const element = await findByText(/Stockholm/i);
    expect(element).toBeInTheDocument();
  });
});
