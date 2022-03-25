"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Option_1 = __importDefault(require("./Option"));
var StockPrice = /** @class */ (function (_super) {
    __extends(StockPrice, _super);
    function StockPrice(option) {
        var _this = _super.call(this, option) || this;
        _this.reports = [];
        return _this;
    }
    StockPrice.prototype.setData = function (reports) {
        this.reports = reports;
    };
    StockPrice.prototype.getUserData = function () {
        var _this = this;
        var result = [];
        if (this.option.search("last") >= 0) {
            result = this.reports.splice(0, parseInt(this.value));
        }
        else if (this.option.search("find") >= 0) {
            result = this.reports.filter(function (report) { return report.fiscalDateEnding.search(_this.value) >= 0; });
            return result;
        }
        return result;
    };
    return StockPrice;
}(Option_1.default));
exports.default = StockPrice;
