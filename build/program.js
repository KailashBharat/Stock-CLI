"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var fundamentalHandlers_1 = require("./handlers/fundamentalHandlers");
var program = new commander_1.Command();
program
    .name("Stock CLI")
    .description("CLI that provides financial information for stocks");
//INCOME STATEMENT
program
    .command("IS")
    .description("Provides the income statement of a desired stock")
    .argument("<stock>", "Stock to find the income statement")
    .option("-lq, --lastQuarters <number>", "Provides the reports for the past <number> of quarters")
    .option("-fq, --findQuarter <year>-<month>", "Provides the report for the desired quarter")
    .option("-ly, --lastYears <number>", "Provides the reports for the past <number> of years")
    .option("-fy, --findYear <year>", "Provides the report for the desired year")
    .action(function (stock, options) {
    (0, fundamentalHandlers_1.IS_Handler)(stock, options);
});
//STOCK PRICE 
program
    .command("price")
    .description("View the stock price")
    .argument("<stock>", "Chosen stock to view prices")
    .option("-d, --daily <days> ", "Display the stock prices for the desired number of days")
    .option("-w, --weekly <weeks> ", "Display the stock prices for the desired number of weeks")
    .option("-m, --monthly <months> ", "Display the stock prices for the desired number of months")
    .action(function (stock, options) {
    (0, fundamentalHandlers_1.priceHandler)(stock, options);
});
exports.default = program;
