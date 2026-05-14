import { useState } from "react";
import { getWeather } from "../services/weatherAPI";

export default function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    if (!city) return;

    try {
      setError("");
      setLoading(true);
      setWeather(null);

      const data = await getWeather(city);
      setWeather(data);
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
  };
}