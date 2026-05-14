import { FaSun, FaCloud, FaCloudRain, FaSnowflake } from "react-icons/fa";

export default function WeatherCard({ weather }) {
  const getIcon = (type) => {
    switch (type) {
      case "Clear":
        return <FaSun />;
      case "Clouds":
        return <FaCloud />;
      case "Rain":
        return <FaCloudRain />;
      case "Snow":
        return <FaSnowflake />;
      default:
        return <FaSun />;
    }
  };

  if (!weather) return null;

  return (
    <div style={styles.card}>
      <h2>
        {weather.name} {getIcon(weather.weather[0].main)}
      </h2>

      <p style={styles.temp}>🌡 {weather.main.temp}°C</p>
      <p>🌥 {weather.weather[0].main}</p>
    </div>
  );
}

const styles = {
  card: {
    marginTop: "20px",
    padding: "20px",
    background: "white",
    borderRadius: "12px",
    display: "inline-block",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  temp: {
    fontSize: "24px",
    fontWeight: "bold",
  },
};