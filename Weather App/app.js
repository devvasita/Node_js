const express = require("express");
const app = express();
const axios = require("axios");

app.use(express.static("./pubilc"));
// setting views
app.set("view engine", "hbs");
app.set("views", "views");
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/weather", async (req, res) => {
  // Use a weather API to get weather data by city
  const { city } = req.query;
  const apiKey = "3c237cb8596e930747e90a16cd87c63f";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    const weatherData = response.data;
    console.log(weatherData);
    // Convert temperature to Fahrenheit
    const temperatureFahrenheit = weatherData.main.temp * (9 / 5) + 32;
    const desc = weatherData.weather[0].description;

    res.render("weather", { weatherData, temperatureFahrenheit, desc });
  } catch (error) {
    console.log(error);
    res.render("error", { error: "City not found" });
  }
});

app.listen(3001, (err) => {
  if (err) throw err;
  console.log("Server running on port 3001");
});
