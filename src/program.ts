import { Command } from "commander";
import {
  fundamentalHandler,
  priceHandler,
} from "./handlers/fundamentalHandlers";
import { screenStocks, createFilters } from "./handlers/finvizHandlers";

const program = new Command();

program
  .name("Stock CLI")
  .description("CLI that provides financial information for stocks");

//INCOME STATEMENT
program
  .command("income")
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
    fundamentalHandler("INCOME_STATEMENT", stock, options);
  });

program
  .command("balance")
  .description("Provides the Balance sheet of a desired stock")
  .argument("<stock>", "Stock to find the Balance Sheet")
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
    fundamentalHandler("BALANCE_SHEET", stock, options);
  });

program
  .command("cash")
  .description("Provides the Cash Flow of a desired stock")
  .argument("<stock>", "Stock to find the Cash Flow Sheet")
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
    fundamentalHandler("CASH_FLOW", stock, options);
  });

program
  .command("earnings")
  .description("Provides the Earnings of a desired stock")
  .argument("<stock>", "Stock to find the Earnings")
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
    fundamentalHandler("EARNINGS", stock, options);
  });

program
  .command("earnings_calendar")
  .description("Provides the Earnings Calendar of a desired stock")
  .option(
    "-s, --stock <stock>",
    "View the Earnings Calendar of a certain stock"
  )
  .action((options: Object) => {
    fundamentalHandler("EARNINGS_CALENDAR", Object.values(options)[0]);
  });

program
  .command("ipo")
  .description("Provides a list of IPOs expected in the next 3 months")
  .action(() => {
    fundamentalHandler("IPO_CALENDAR");
  });

program
  .command("overview")
  .description("Provides an overview of a desired stock")
  .argument("<stock>", "Stock to find view")
  .action((stock: string) => {
    fundamentalHandler("OVERVIEW", stock);
  });

program
  .command("search")
  .description("Searches for a certain stock")
  .argument("<keyword>", "keyword to search for")
  .action((keyword: string) => {
    fundamentalHandler("SYMBOL_SEARCH", "", { keywords: keyword });
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
  .command("create-filter")
  .description("Create a filter for stocks")
  .action(() => {
    createFilters();
  });

program
  .command("screen")
  .description("Screen for stocks")
  .argument("<filter>", "The filter you'd like to apply for screening stocks")
  .option("-l, --list", "List all available filters")
  .option("-s, --sort <filter>", "The filter you'd like to sort by.")
  .action((filter: string, options: Object) => {
    screenStocks(filter, options);
  });

export default program;
