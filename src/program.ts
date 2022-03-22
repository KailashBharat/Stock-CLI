import { Command } from "commander";
import { incomeStatement } from "./api/stocks";

const program = new Command();

program
  .name("Stock CLI")
  .description("CLI that provides financial information for stocks");

program
  .command("is")
  .description("Provides the income statement of a desired stock")
  .argument("<stock>", "Stock to find the income statement")
  .option("-q, --quarterly <year>-<month>", "Provides the quarterly reports")
  .option("-y, --yearly <year>", "Provides the yearly reports")
  .action((stock: string, options) => {
    const option: string[] = Object.keys(options);

    console.log(`You chose ${stock.toUpperCase()}`);
    console.log(option[0], options[option[0]]);
    // incomeStatement(stock.toUpperCase());
  });

program
  .command("price")
  .description("View the stock price")
  .argument("<stock>", "Chosen stock to view prices")
  .option(
    "-d, --daily <days> ",
    "Display the stock prices for the desired number of days"
  )
  .option(
    "-m, --monthly <months> ",
    "Display the stock prices for the desired number of months"
  )
  .option(
    "-y, --yearly <years> ",
    "Display the stock prices for the desired number of years"
  )
  .action((stock: string, options) => {
    const option: string[] = Object.keys(options);

    if (option.length > 1) return console.log("Please specify only one option");

    console.log(
      `You chose to view the stock prices of ${stock.toUpperCase()}. You have chose to view the stock on a ${
        option[0]
      } chart.`
    );
  });

export default program;
