"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchStockData = void 0;
require("dotenv/config");
const axios_1 = __importDefault(require("axios"));
async function fetchStockData(functionType, symbol, optionalInfo = {}) {
    let data;
    let URL = `https://www.alphavantage.co/query?function=${functionType}&apikey=${process.env.ALPHA_API_KEY}`;
    const FUNCTIONTYPES = [
        "INCOME_STATEMENT",
        "BALANCE_SHEET",
        "CASH_FLOW",
        "EARNINGS",
        "OVERVIEW",
    ];
    if (FUNCTIONTYPES.includes(functionType) && !symbol)
        return console.log("Please enter a stock symbol");
    if (symbol)
        URL += `&symbol=${symbol}`;
    for (let i = 0; i < Object.keys(optionalInfo).length; i++) {
        const key = Object.keys(optionalInfo)[i];
        const value = optionalInfo[key];
        const urlOption = `&${key}=${value}`;
        URL += urlOption;
    }
    try {
        const result = await axios_1.default.get(URL);
        data = result.data;
        if (!data)
            return console.log("Something went wrong");
        // console.log(data);
        return data;
    }
    catch (error) {
        console.log(error);
    }
}
exports.fetchStockData = fetchStockData;
// fetchStockData("EARNINGS_CALENDAR", "ASML")
