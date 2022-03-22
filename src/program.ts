import { Command } from "commander";
import { IS_Handler, priceHandler } from "./handlers/fundamentalHandlers";

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
    IS_Handler(stock, options);
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
    priceHandler(stock, options);
  });

export default program;
