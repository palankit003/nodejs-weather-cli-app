import { getWeather } from "./getWeather";
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question: string) => {
  return new Promise<string>((resolve) => {
    rl.question(question, (answer: string) => {
      resolve(answer);
    });
  });
};

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
