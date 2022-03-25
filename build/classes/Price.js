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
        _this.prices = {};
        return _this;
    }
    StockPrice.prototype.setData = function (prices) {
        this.prices = prices;
    };
    StockPrice.prototype.getUserData = function () {
        var result = {};
        var keys = Object.keys(this.prices);
        for (var i = 0; i < parseInt(this.value); i++) {
            var key = keys[i];
            result[key] = this.prices[key];
        }
        return result;
    };
    return StockPrice;
}(Option_1.default));
exports.default = StockPrice;
