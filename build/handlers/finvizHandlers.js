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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFilters = exports.screenStocks = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const finvizFilters_1 = __importDefault(require("../finvizFilters"));
const FinvizOptions_1 = __importDefault(require("../classes/FinvizOptions"));
const fs_extra_1 = __importDefault(require("fs-extra"));
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
async function createFilters() {
    const filters = new FinvizOptions_1.default(finvizFilters_1.default);
    try {
        const userFilters = [];
        let prompt1;
        let filter;
        let prompt2 = {
            isNotDone: true,
            value: "",
        };
        filter = await inquirer_1.default.prompt([
            {
                message: "What would you like to name your filter?",
                name: "name",
            },
        ]);
        while (prompt2.isNotDone) {
            prompt1 = await inquirer_1.default.prompt([
                {
                    type: "list",
                    message: "What filter would you like to apply?",
                    name: "key",
                    choices: filters.getAllOptions(),
                },
            ]);
            prompt2 = await inquirer_1.default.prompt([
                {
                    type: "list",
                    message: `What value would you like ${prompt1?.key} to have?`,
                    name: "value",
                    choices: filters.getFilterOptionNames(prompt1.key),
                },
                {
                    type: "confirm",
                    message: "Do you want to continue?",
                    name: "isNotDone",
                },
            ]);
            if (prompt2.value === "None")
                continue;
            userFilters.push({
                name: prompt1.key,
                value: filters.getValueOfOptionName(prompt1.key, prompt2.value),
                id: filters.getIdOfFilter(prompt1.key),
            });
        }
        await fs_extra_1.default.ensureFile("./src/userFilters.ts");
        await fs_extra_1.default.appendFile("src/userFilters.ts", `\n\nexport const ${filter.name} = ${JSON.stringify(userFilters, null, 2)}`);
        console.log("\nSuccesfully created filter!");
    }
    catch (error) {
        console.log(error);
    }
}
exports.createFilters = createFilters;
