import { useState } from "react";
import useWeather from "./hooks/useWeather";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const { weather, loading, error, fetchWeather } = useWeather();

  const handleSearch = () => {
    fetchWeather(city);
  };

  const getBackground = () => {
    if (!weather) return "linear-gradient(to right, #e0f7ff, #f2f6ff)";

    const type = weather.weather[0].main.toLowerCase();

    switch (type) {
      case "clear":
        return "linear-gradient(to right, #fceabb, #f8b500)";
      case "clouds":
        return "linear-gradient(to right, #bdc3c7, #2c3e50)";
      case "rain":
        return "linear-gradient(to right, #4b79a1, #283e51)";
      case "snow":
        return "linear-gradient(to right, #e6dada, #274046)";
      default:
        return "linear-gradient(to right, #e0f7ff, #f2f6ff)";
    }
  };

  return (
    <div style={{ ...styles.container, background: getBackground() }}>
      <h1 style={styles.title}>🌤 Weather Dashboard</h1>

      <SearchBar
        city={city}
        setCity={setCity}
        onSearch={handleSearch}
      />

      {error && <p style={styles.error}>{error}</p>}

      {loading && <div style={styles.spinner}></div>}

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
    transition: "all 0.5s ease",
  },

  title: {
    marginBottom: "20px",
    color: "#fff",
    textShadow: "0 2px 5px rgba(0,0,0,0.3)",
  },

  error: {
    color: "red",
    fontWeight: "bold",
  },

  spinner: {
    width: "40px",
    height: "40px",
    border: "4px solid #ccc",
    borderTop: "4px solid #2d6cdf",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    margin: "20px auto",
  },
};