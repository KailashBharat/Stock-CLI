"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Option {
    option;
    value;
    constructor(option) {
        this.option = Object.keys(option)[0];
        this.value = Object.values(option)[0];
    }
    searchOption(searchString) {
        if (!this.option)
            return false;
        const match = this?.option.toLowerCase().search(searchString);
        if (match === -1) {
            return false;
        }
        return true;
    }
}
exports.default = Option;
