"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.screenStocks = void 0;
const userFilters = __importStar(require("../userFilters"));
const finviz_1 = require("../api/finviz");
async function screenStocks(filter, options) {
    let returnedStock;
    let stockFilter = userFilters[filter];
    if (!stockFilter)
        return console.log("No filter with that name exists.");
    returnedStock = await (0, finviz_1.getScreenedStocks)(stockFilter);
    console.log(returnedStock);
    try {
    }
    catch (error) {
        console.log(error);
    }
}
exports.screenStocks = screenStocks;
