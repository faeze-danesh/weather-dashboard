const API_KEY = "cc879bede90c9e83261a1b99535c2f97";

export async function getWeather(city) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (!res.ok) {
    throw new Error("City not found");
  }

  return res.json();
}