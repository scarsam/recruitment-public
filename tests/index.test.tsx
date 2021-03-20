import { render, fireEvent } from "@testing-library/react";
import { fetchWeather } from "../utils/api";
import { response } from "./response";
import App from "../pages/index";

describe("Weather App", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("fetches the correct location", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(response));

    fetchWeather("Stockholm").then((data) => {
      expect(data).toEqual(response);
    });

    expect(fetchMock.mock.calls[0][0]).toEqual(
      "http://api.openweathermap.org/data/2.5/weather?q=Stockholm&units=metric&appid=a17480f70f0d4368ad0b5eabd0e37b66",
    );
  });

  it("fetches the weather and outputs the data", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(response));
    const { findByText, getByText, getByLabelText } = render(<App />);

    fireEvent.change(getByLabelText("Location"), {
      target: { value: "Stockholm" },
    });

    const button = getByText("Get Weather");
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    const location = await findByText(/Sweden/i);
    const temp = await findByText(/-2°/i);

    expect(location).toBeInTheDocument();
    expect(temp).toBeInTheDocument();
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("throws an exception when no city is found", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({ cod: 401, message: "city not found" }),
      { status: 401 },
    );
    const { findByText, getByText, getByLabelText } = render(<App />);

    fireEvent.change(getByLabelText("Location"), {
      target: { value: "123" },
    });

    const button = getByText("Get Weather");
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    const element = await findByText(/city not found/i);

    expect(element).toBeInTheDocument();
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("throws an exception when the API is down", async () => {
    const { findByText, getByText, getByLabelText } = render(<App />);
    fetchMock.mockReject(() => Promise.reject(new Error("Server is down")));

    fireEvent.change(getByLabelText("Location"), {
      target: { value: "Stockholm" },
    });

    const button = getByText("Get Weather");
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    const element = await findByText(/Server is down/i);

    expect(element).toBeInTheDocument();
  });
});
