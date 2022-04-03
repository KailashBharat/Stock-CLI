"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFilters = exports.getScreenedStock = exports.setFinvizFilterOptions = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const ora_classic_1 = __importDefault(require("ora-classic"));
const inquirer_1 = __importDefault(require("inquirer"));
const options_1 = __importDefault(require("../options"));
async function setFinvizFilterOptions() {
    const spinner = (0, ora_classic_1.default)("Loading...");
    try {
        spinner.start();
        const browser = await puppeteer_1.default.launch({ headless: true });
        const page = (await browser.pages())[0];
        await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36");
        await page.goto("https://finviz.com/screener.ashx?v=111&ft=4", {
            waitUntil: "networkidle2",
        });
        await page.waitForSelector("button.Button__StyledButton-a1qza5-0.lcqSKB");
        await page.click("button.Button__StyledButton-a1qza5-0.lcqSKB");
        await page.waitForSelector("button.Button__StyledButton-a1qza5-0.lcqSKB");
        await page.click("button.Button__StyledButton-a1qza5-0.lcqSKB");
        const options = await page.evaluate(() => {
            const tableChildren = document.querySelector("#filter-table-filters > tbody")?.children ||
                "No children";
            const tableRows = Object.values(tableChildren);
            const screeningOptions = [];
            tableRows.forEach((row) => {
                const rowChildren = row.children;
                const rowData = Object.values(rowChildren) || [];
                let name;
                let id;
                let nameOptions = [];
                rowData.forEach((data) => {
                    const dataChildren = Object.values(data.children) || [];
                    const filterName = dataChildren.filter((element) => element.tagName.toLowerCase() == "span")[0];
                    const filterOptions = dataChildren.filter((element) => element.tagName.toLowerCase() == "select")[0];
                    if (filterName?.innerHTML) {
                        name = filterName.innerHTML;
                    }
                    if (filterOptions?.children) {
                        Object.values(filterOptions?.children).forEach((option) => {
                            nameOptions.push({
                                OptionName: option.innerHTML,
                                value: option.value,
                            });
                        });
                        id = filterOptions.id;
                        screeningOptions.push({ name: name, id: id, options: nameOptions });
                        name = " ";
                        id = "";
                        nameOptions = [];
                    }
                });
            });
            return screeningOptions;
        });
        await fs_extra_1.default.unlink("src/options.ts");
        const writer = fs_extra_1.default.createWriteStream("src/options.ts");
        writer.write(`const options = ${JSON.stringify(options, null, 2)};\n`);
        writer.write(`export default options;`);
        await browser.close();
        spinner.succeed("Done");
    }
    catch (error) {
        spinner.fail("Something went wrong");
        console.log(error);
    }
}
exports.setFinvizFilterOptions = setFinvizFilterOptions;
async function getScreenedStock(filterOptions) {
    const spinner = (0, ora_classic_1.default)("Loading...");
    try {
        spinner.start();
        const browser = await puppeteer_1.default.launch({ headless: true });
        const page = (await browser.pages())[0];
        await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36");
        await page.goto("https://finviz.com/screener.ashx?v=111&ft=4", {
            waitUntil: "networkidle2",
        });
        await page.waitForSelector("button.Button__StyledButton-a1qza5-0.lcqSKB");
        await page.click("button.Button__StyledButton-a1qza5-0.lcqSKB");
        await page.waitForSelector("button.Button__StyledButton-a1qza5-0.lcqSKB");
        await page.click("button.Button__StyledButton-a1qza5-0.lcqSKB");
        for (let i = 0; i < filterOptions.length; i++) {
            await page.waitForSelector(`#${filterOptions[i].id}`);
            await page.select(`#${filterOptions[i].id}`, filterOptions[i].option);
        }
        await page.waitForSelector("#screener-views-table table.table-light tr");
        const tickers = await page.$$eval("#screener-views-table table.table-light tr", (elements) => {
            const tickersSymbols = [];
            for (let i = 1; i < elements.length; i++) {
                const elementChildren = Object.values(elements[i].children);
                const ticker = Object.values(elementChildren[1].children)[0].innerHTML ||
                    "no ticker";
                tickersSymbols.push(ticker);
            }
            return tickersSymbols;
        });
        await browser.close();
        spinner.succeed("Done");
        console.log(tickers);
    }
    catch (error) {
        spinner.fail("Something went wrong");
        console.log(error);
    }
}
exports.getScreenedStock = getScreenedStock;
async function createFilters() {
    try {
        let userOptions = { isNotDone: true };
        while (userOptions.isNotDone) {
            const answers = await inquirer_1.default.prompt([
                {
                    type: "list",
                    message: "What filter would you like to apply?",
                    name: "filter1",
                    choices: () => {
                        return options_1.default.map((option) => {
                            return option.name;
                        });
                    },
                },
            ]);
            userOptions = await inquirer_1.default.prompt([
                {
                    type: "list",
                    message: `What value would you like ${answers?.filter1} to have?`,
                    name: "filter1Value",
                    choices: () => {
                        let values = options_1.default.filter((option) => option.name == answers.filter1)[0];
                        return values.options.map((val) => {
                            return val?.OptionName;
                        });
                    },
                },
                {
                    type: "confirm",
                    message: "Do you want to continue?",
                    name: "isNotDone",
                },
            ]);
        }
    }
    catch (error) {
        console.log(error);
    }
}
exports.createFilters = createFilters;
const testArray = [
    {
        id: "fs_exch",
        option: "nasd",
    },
    {
        id: "fs_idx",
        option: "sp500",
    },
    {
        id: "fs_cap",
        option: "mega",
    },
];
createFilters();
// getScreenedStock(testArray);
