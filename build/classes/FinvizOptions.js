"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FinvizOptions {
    filters;
    constructor(filters) {
        this.filters = filters;
    }
    findFilter(desiredFilter) {
        const foundFilter = this.filters.filter((filter) => filter.name.toLowerCase() === desiredFilter.toLowerCase())[0];
        if (!foundFilter)
            return "No filter found with that name";
        return foundFilter;
    }
    getFilterOptionNames(desiredFilter) {
        const filter = this.findFilter(desiredFilter);
        const optionNames = [];
        if (typeof filter === "string")
            return filter;
        for (let i = 0; i < filter.options.length; i++) {
            if (filter.options[i].OptionName.search("Custom") >= 0)
                continue;
            if (filter.options[i].OptionName.search("Any") >= 0)
                continue;
            optionNames.push(filter.options[i].OptionName);
        }
        if (!optionNames.length)
            return ["None"];
        return optionNames;
    }
    getValueOfOptionName(desiredFilter, optionName) {
        const filter = this.findFilter(desiredFilter);
        if (typeof filter === "string")
            return filter;
        const data = filter.options.filter((option) => option.OptionName.toLowerCase() === optionName.toLowerCase())[0];
        return data.value;
    }
    getAllOptions() {
        const options = this.filters.map((filter) => filter.name);
        return options;
    }
    getIdOfFilter(desiredFilter) {
        const filter = this.findFilter(desiredFilter);
        if (typeof filter === "string")
            return filter;
        return filter.id;
    }
}
exports.default = FinvizOptions;
