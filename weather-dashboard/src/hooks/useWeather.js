import { useState } from "react";
import { getWeather, getForecast } from "../services/weatherAPI";

export default function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [forecast, setForecast] = useState([]);

  const fetchWeather = async (city) => {
    if (!city) return;

    try {
      setError("");
      setLoading(true);
      setWeather(null);
      setForecast([]);

      const data = await getWeather(city);
      setWeather(data);

      const forecastData = await getForecast(city);

      const dailyForecast = forecastData.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );

      setForecast(dailyForecast);
    } catch {
      setError("City not found");
    } finally {
      setLoading(false);
    }
  };

  return {
    weather,
    loading,
    error,
    fetchWeather,
    forecast,
  };
}