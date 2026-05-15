import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiFog
} from "react-icons/wi";

export default function WeatherCard({ weather }) {
  const getIcon = (type) => {
    switch (type) {
      case "Clear":
        return <WiDaySunny size={60} />;
      case "Clouds":
        return <WiCloudy size={60} />;
      case "Rain":
        return <WiRain size={60} />;
      case "Snow":
        return <WiSnow size={60} />;
      case "Thunderstorm":
        return <WiThunderstorm size={60} />;
      default:
        return <WiFog size={60} />;
    }
  };

  if (!weather) return null;

  return (
    <div style={styles.card}>
      <h2>{weather.name}</h2>

      <div style={styles.icon}>
        {getIcon(weather.weather[0].main)}
      </div>

      <p style={styles.temp}>
        🌡 {Math.round(weather.main.temp)}°C
      </p>

      <p>{weather.weather[0].main}</p>
    </div>
  );
}

const styles = {
  card: {
    marginTop: "20px",
    padding: "25px",
    borderRadius: "22px",
    display: "inline-block",
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(20px)",
    color: "white",
    boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
    animation: "fadeIn 0.6s ease",
  },

  icon: {
    margin: "10px 0",
  },

  temp: {
    fontSize: "26px",
    fontWeight: "bold",
  },
};