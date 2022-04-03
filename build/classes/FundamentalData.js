"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Option_1 = __importDefault(require("./Option"));
class FundamentalData extends Option_1.default {
    reports = [];
    constructor(option) {
        super(option);
    }
    getUserData() {
        let result = [];
        if (this.option.search("last") >= 0) {
            result = this.reports?.splice(0, parseInt(this.value));
        }
        else if (this.option.search("find") >= 0) {
            result = this.reports.filter((report) => report.fiscalDateEnding.search(this.value) >= 0);
            return result;
        }
        return result;
    }
    setData(reports) {
        this.reports = reports;
    }
}
exports.default = FundamentalData;
