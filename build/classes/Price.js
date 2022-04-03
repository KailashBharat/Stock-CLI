"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Option_1 = __importDefault(require("./Option"));
class StockPrice extends Option_1.default {
    prices = {};
    constructor(option) {
        super(option);
    }
    setData(prices) {
        this.prices = prices;
    }
    getUserData() {
        let result = {};
        const keys = Object.keys(this.prices);
        for (let i = 0; i < parseInt(this.value); i++) {
            const key = keys[i];
            result[key] = this.prices[key];
        }
        return result;
    }
}
exports.default = StockPrice;
