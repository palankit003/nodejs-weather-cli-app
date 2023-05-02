const readline = require("readline");
const spin = require("nanospinner");
require("dotenv").config();

const apiKey = process.env.API_KEY;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

async function getWeather(city) {
  const spinner = spin.createSpinner("Getting Data").start();
  const req = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );
  spinner.success(); // Stop the spinner animation
  process.stdout.write("\r");
  const data = await req.json();
  return data;
}
async function main() {
  let name = await askQuestion("What is your name? ");
  console.log(`Hello ${name}`);

  let quit = false;

  while (!quit) {
    try {
      const place = await askQuestion(
        "Enter the name of a city to know its weather (or type 'quit'/ ctrl+C to exit): "
      );

      if (place.toLowerCase() === "quit") {
        quit = true;
      } else {
        const data = await getWeather(place);
        const temp = `${(data.main.temp - 273.15).toFixed(2)} °C`;
        console.log(temp);
      }
    } catch (error) {
      console.error("Error: Invalid Data", error.message);
    }
  }

  rl.close();
}

main();
