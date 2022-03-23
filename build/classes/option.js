"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Option = /** @class */ (function () {
    function Option(option) {
        this.reports = [];
        this.option = Object.keys(option)[0];
        this.value = Object.values(option)[0];
    }
    Option.prototype.isQuarter = function () {
        var match = this.option.toLowerCase().search("quarter");
        if (match === -1) {
            return false;
        }
        return true;
    };
    Option.prototype.isYear = function () {
        var match = this.option.toLowerCase().search("year");
        if (match === -1) {
            return false;
        }
        return true;
    };
    Option.prototype.setData = function (reports) {
        this.reports = reports;
    };
    Option.prototype.getUserData = function () {
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
    return Option;
}());
exports.default = Option;
