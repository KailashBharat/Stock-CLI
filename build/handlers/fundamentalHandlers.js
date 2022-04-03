"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.priceHandler = exports.fundamentalHandler = void 0;
const stocks_1 = require("../api/stocks");
const FundamentalData_1 = __importDefault(require("../classes/FundamentalData"));
const price_1 = __importDefault(require("../classes/price"));
async function fundamentalHandler(fundamentalFunction, stock, options = {}) {
    if (Object.keys(options).length > 1)
        return console.log("Please specify only one option");
    const option = new FundamentalData_1.default(options);
    let output = [];
    //FIXME: Make a method that logs the user's option
    if (stock)
        console.log(`You chose ${stock.toUpperCase()}`);
    try {
        if (option.searchOption("quarter")) {
            const { quarterlyReports } = await (0, stocks_1.fetchStockData)(fundamentalFunction, stock);
            option?.setData(quarterlyReports);
            output = option.getUserData();
        }
        else if (option.searchOption("year")) {
            const { annualReports } = await (0, stocks_1.fetchStockData)(fundamentalFunction, stock);
            option.setData(annualReports);
            output = option.getUserData();
        }
        else {
            output.push(await (0, stocks_1.fetchStockData)(fundamentalFunction, stock));
        }
        output.length
            ? console.log(output)
            : console.log("No data found, please try something else");
    }
    catch (error) {
        console.log(error);
    }
}
exports.fundamentalHandler = fundamentalHandler;
async function priceHandler(stock, options) {
    if (Object.keys(options).length > 1 || Object.keys(options).length == 0)
        return console.log("Please specify only one option");
    const option = new price_1.default(options);
    let result;
    let period;
    let userOption = "TIME_SERIES_DAILY";
    try {
        if (option.searchOption("daily")) {
            userOption = "TIME_SERIES_DAILY";
        }
        else if (option.searchOption("weekly")) {
            userOption = "TIME_SERIES_WEEKLY";
        }
        else if (option.searchOption("monthly")) {
            userOption = "TIME_SERIES_MONTHLY";
        }
        result = await (0, stocks_1.fetchStockData)(userOption, stock);
        period = Object.keys(result)[1];
        option.setData(result[period]);
        console.log(option.getUserData());
    }
    catch (error) {
        console.log(error);
    }
}
exports.priceHandler = priceHandler;
