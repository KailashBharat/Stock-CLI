"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFilters = exports.getScreenedStocks = exports.setFinvizFilterOptions = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const ora_classic_1 = __importDefault(require("ora-classic"));
const inquirer_1 = __importDefault(require("inquirer"));
const finvizFilters_1 = __importDefault(require("../finvizFilters"));
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
        await fs_extra_1.default.unlink("src/finvizFilters.ts");
        const writer = fs_extra_1.default.createWriteStream("src/finvizFilters.ts");
        writer.write(`const filters = ${JSON.stringify(options, null, 2)};\n\n`);
        writer.write(`export default filters;`);
        await browser.close();
        spinner.succeed("Done");
    }
    catch (error) {
        spinner.fail("Something went wrong");
        console.log(error);
    }
}
exports.setFinvizFilterOptions = setFinvizFilterOptions;
async function getScreenedStocks(filterOptions) {
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
            if (typeof filterOptions[i]?.options !== "string")
                return;
            await page.waitForSelector(`#${filterOptions[i].id}`);
            await page.select(`#${filterOptions[i].id}`, filterOptions[i]?.options.toString());
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
        return tickers;
    }
    catch (error) {
        spinner.fail("Something went wrong");
        console.log(error);
    }
}
exports.getScreenedStocks = getScreenedStocks;
async function createFilters() {
    try {
        const userFilters = [];
        let prompt1;
        let filter;
        let prompt2 = {
            isNotDone: true,
            value: "",
        };
        let filterValues = { name: "", id: "" };
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
                    choices: () => {
                        return finvizFilters_1.default.map((option) => {
                            return option.name;
                        });
                    },
                },
            ]);
            prompt2 = await inquirer_1.default.prompt([
                {
                    type: "list",
                    message: `What value would you like ${prompt1?.key} to have?`,
                    name: "value",
                    choices: () => {
                        filterValues = finvizFilters_1.default.filter((option) => option.name == prompt1.key)[0];
                        if (!filterValues?.options)
                            return;
                        return filterValues.options.map((val) => {
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
            userFilters.push({
                name: prompt1.key,
                options: prompt2.value,
                id: filterValues.id,
            });
        }
        await fs_extra_1.default.ensureFile("./src/userFilters.ts");
        await fs_extra_1.default.appendFile("src/userFilters.ts", `\n\nexport const ${filter.name} = ${JSON.stringify(userFilters, null, 2)}`);
    }
    catch (error) {
        console.log(error);
    }
}
exports.createFilters = createFilters;
