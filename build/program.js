"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const fundamentalHandlers_1 = require("./handlers/fundamentalHandlers");
const program = new commander_1.Command();
program
    .name("Stock CLI")
    .description("CLI that provides financial information for stocks");
//INCOME STATEMENT
program
    .command("income")
    .description("Provides the income statement of a desired stock")
    .argument("<stock>", "Stock to find the income statement")
    .option("-lq, --lastQuarters <number>", "Provides the reports for the past <number> of quarters")
    .option("-fq, --findQuarter <year>-<month>", "Provides the report for the desired quarter")
    .option("-ly, --lastYears <number>", "Provides the reports for the past <number> of years")
    .option("-fy, --findYear <year>", "Provides the report for the desired year")
    .action((stock, options) => {
    (0, fundamentalHandlers_1.fundamentalHandler)("INCOME_STATEMENT", stock, options);
});
program
    .command("balance")
    .description("Provides the Balance sheet of a desired stock")
    .argument("<stock>", "Stock to find the Balance Sheet")
    .option("-lq, --lastQuarters <number>", "Provides the reports for the past <number> of quarters")
    .option("-fq, --findQuarter <year>-<month>", "Provides the report for the desired quarter")
    .option("-ly, --lastYears <number>", "Provides the reports for the past <number> of years")
    .option("-fy, --findYear <year>", "Provides the report for the desired year")
    .action((stock, options) => {
    (0, fundamentalHandlers_1.fundamentalHandler)("BALANCE_SHEET", stock, options);
});
program
    .command("cash")
    .description("Provides the Cash Flow of a desired stock")
    .argument("<stock>", "Stock to find the Cash Flow Sheet")
    .option("-lq, --lastQuarters <number>", "Provides the reports for the past <number> of quarters")
    .option("-fq, --findQuarter <year>-<month>", "Provides the report for the desired quarter")
    .option("-ly, --lastYears <number>", "Provides the reports for the past <number> of years")
    .option("-fy, --findYear <year>", "Provides the report for the desired year")
    .action((stock, options) => {
    (0, fundamentalHandlers_1.fundamentalHandler)("CASH_FLOW", stock, options);
});
program
    .command("earnings")
    .description("Provides the Earnings of a desired stock")
    .argument("<stock>", "Stock to find the Earnings")
    .option("-lq, --lastQuarters <number>", "Provides the reports for the past <number> of quarters")
    .option("-fq, --findQuarter <year>-<month>", "Provides the report for the desired quarter")
    .option("-ly, --lastYears <number>", "Provides the reports for the past <number> of years")
    .option("-fy, --findYear <year>", "Provides the report for the desired year")
    .action((stock, options) => {
    (0, fundamentalHandlers_1.fundamentalHandler)("EARNINGS", stock, options);
});
program
    .command("earnings_calendar")
    .description("Provides the Earnings Calendar of a desired stock")
    .argument("<stock>", "Stock to find the Earnings Calendar")
    .action((stock) => {
    (0, fundamentalHandlers_1.fundamentalHandler)("EARNINGS_CALENDAR", stock);
});
program
    .command("ipo")
    .description("Provides a list of IPOs expected in th next 3 months")
    .action(() => {
    (0, fundamentalHandlers_1.fundamentalHandler)("IPO_CALENDAR");
});
program
    .command("overview")
    .description("Provides an overview of a desired stock")
    .argument("<stock>", "Stock to find view")
    .action((stock) => {
    (0, fundamentalHandlers_1.fundamentalHandler)(stock, "OVERVIEW");
});
program
    .command("search")
    .description("Searches for a certain stock")
    .argument("<stock>", "keyword to search for")
    .action((keyword, options) => {
    (0, fundamentalHandlers_1.fundamentalHandler)(keyword, "SYMBOL_SEARCH", options);
});
//STOCK PRICE
program
    .command("price")
    .description("View the stock price")
    .argument("<stock>", "Chosen stock to view prices")
    .option("-d, --daily <days> ", "Display the stock prices for the desired number of days")
    .option("-w, --weekly <weeks> ", "Display the stock prices for the desired number of weeks")
    .option("-m, --monthly <months> ", "Display the stock prices for the desired number of months")
    .action((stock, options) => {
    (0, fundamentalHandlers_1.priceHandler)(stock, options);
});
program
    .command("screen")
    .description("Screen for stocks")
    .option("-l, --long-term, Screening for longterm stocks")
    .option("-s, --short-term, Screening for shortterm stocks")
    .action((options) => {
    if (!Object.keys(options).length)
        return console.log("Please specify an option.");
    console.log(`You chose to screen for ${Object.keys(options)[0]} stocks`);
});
exports.default = program;
