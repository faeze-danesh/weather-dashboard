import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiFog
} from "react-icons/wi";

export default function Forecast({ forecast }) {
  const getIcon = (type) => {
    switch (type) {
      case "Clear":
        return <WiDaySunny size={30} />;
      case "Clouds":
        return <WiCloudy size={30} />;
      case "Rain":
        return <WiRain size={30} />;
      case "Snow":
        return <WiSnow size={30} />;
      case "Thunderstorm":
        return <WiThunderstorm size={30} />;
      default:
        return <WiFog size={30} />;
    }
  };

  return (
    <div style={styles.container}>
      {forecast.map((day) => (
        <div key={day.dt} style={styles.card}>
          <h4>
            {new Date(day.dt * 1000).toLocaleDateString("en-US", {
              weekday: "short",
            })}
          </h4>

          <div>{getIcon(day.weather[0].main)}</div>

          <p>{Math.round(day.main.temp)}°C</p>

          <p>{day.weather[0].main}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    flexWrap: "wrap",
    marginTop: "30px",
  },

  card: {
    padding: "15px",
    borderRadius: "18px",
    minWidth: "110px",
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(20px)",
    color: "white",
    boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
    animation: "fadeIn 0.6s ease",
  },
};