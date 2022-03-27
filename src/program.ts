import { Command } from "commander";
import { IS_Handler, priceHandler } from "./handlers/fundamentalHandlers";

const program = new Command();

program
  .name("Stock CLI")
  .description("CLI that provides financial information for stocks");

//INCOME STATEMENT
program
  .command("IS")
  .description("Provides the income statement of a desired stock")
  .argument("<stock>", "Stock to find the income statement")
  .option(
    "-lq, --lastQuarters <number>",
    "Provides the reports for the past <number> of quarters"
  )
  .option(
    "-fq, --findQuarter <year>-<month>",
    "Provides the report for the desired quarter"
  )
  .option(
    "-ly, --lastYears <number>",
    "Provides the reports for the past <number> of years"
  )
  .option("-fy, --findYear <year>", "Provides the report for the desired year")
  .action((stock: string, options: Object) => {
    IS_Handler(stock, options);
  });

//STOCK PRICE
program
  .command("price")
  .description("View the stock price")
  .argument("<stock>", "Chosen stock to view prices")
  .option(
    "-d, --daily <days> ",
    "Display the stock prices for the desired number of days"
  )
  .option(
    "-w, --weekly <weeks> ",
    "Display the stock prices for the desired number of weeks"
  )
  .option(
    "-m, --monthly <months> ",
    "Display the stock prices for the desired number of months"
  )
  .action((stock: string, options: Object) => {
    priceHandler(stock, options);
  });

program
  .command("screen")
  .description("Screen for stocks")
  .option("-l, --long-term, Screening for longterm stocks")
  .option("-s, --short-term, Screening for shortterm stocks")
  .action((options: Object) => {
    if (!Object.keys(options).length)
      return console.log("Please specify an option.");
    console.log(`You chose to screen for ${Object.keys(options)[0]} stocks`);
  });

export default program;
