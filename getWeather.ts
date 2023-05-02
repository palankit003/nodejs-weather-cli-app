const spin = require("nanospinner");

require("dotenv").config();

const apiKey = process.env.API_KEY;

export async function getWeather(city: string) {
  const spinner = spin.createSpinner("Getting Data").start();
  const req = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );
  spinner.success(); // Stop the spinner animation
  process.stdout.write("\r");
  const data = await req.json();
  return data;
}
