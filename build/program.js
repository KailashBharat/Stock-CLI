"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var program = new commander_1.Command();
program
    .name("Stock CLI")
    .description("CLI that provides financial information for stocks");
program
    .command("is")
    .description("Provides the income statement of a desired stock")
    .argument("<stock>", "Stock to find the income statement")
    .option("-q, --quarterly <year>-<month>", "Provides the quarterly reports")
    .action(function (stock, options) {
    var option = Object.keys(options);
    console.log("You chose ".concat(stock.toUpperCase()));
    console.log(option[0], options[option[0]]);
    // incomeStatement(stock.toUpperCase());
});
program
    .command("price")
    .description("View the stock price")
    .argument("<stock>", "Chosen stock to view prices")
    .option("-d, --daily <days> ", "Display the stock price daily")
    .option("-m, --monthly <months> ", "Display the stock price monthly")
    .option("-y, --yearly <years> ", "Display the stock price yearly")
    .action(function (stock, options) {
    var option = Object.keys(options);
    if (option.length > 1)
        return console.log("Please specify only one option");
    console.log("You chose to view the stock prices of ".concat(stock.toUpperCase(), ". You have chose to view the stock on a ").concat(option[0], " chart."));
});
exports.default = program;
