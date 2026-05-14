import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import useWeather from "./hooks/useWeather";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const { weather, loading, error, fetchWeather } = useWeather();

  return (
    <div style={styles.container}>
      <h1>🌤 Weather Dashboard</h1>

      <SearchBar
        city={city}
        setCity={setCity}
        onSearch={() => fetchWeather(city)}
      />

      {error && <p style={styles.error}>{error}</p>}
      {loading && <p>Loading...</p>}

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial",
    padding: "40px",
    minHeight: "100vh",
    background: "linear-gradient(to right, #e0f7ff, #f2f6ff)",
  },
  error: {
    color: "red",
  },
};