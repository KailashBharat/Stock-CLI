"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Option = /** @class */ (function () {
    function Option(option) {
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
    return Option;
}());
exports.default = Option;
