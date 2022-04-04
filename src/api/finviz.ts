import puppeteer from "puppeteer";
import util from "util";
import fse from "fs-extra";
import ora from "ora-classic";
import inquirer from "inquirer";

import options from "../finvizFilters";

export interface filterOption {
  name: string;
  id: string;
  options: Object[] | string;
}

export async function setFinvizFilterOptions() {
  const spinner = ora("Loading...");
  try {
    spinner.start();
    const browser = await puppeteer.launch({ headless: true });
    const page = (await browser.pages())[0];

    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36"
    );

    await page.goto("https://finviz.com/screener.ashx?v=111&ft=4", {
      waitUntil: "networkidle2",
    });
    await page.waitForSelector("button.Button__StyledButton-a1qza5-0.lcqSKB");
    await page.click("button.Button__StyledButton-a1qza5-0.lcqSKB");
    await page.waitForSelector("button.Button__StyledButton-a1qza5-0.lcqSKB");
    await page.click("button.Button__StyledButton-a1qza5-0.lcqSKB");

    const options: filterOption[] = await page.evaluate(() => {
      const tableChildren: HTMLCollection | string =
        document.querySelector("#filter-table-filters > tbody")?.children ||
        "No children";
      const tableRows: Element[] = Object.values(tableChildren);
      const screeningOptions: filterOption[] = [];
      tableRows.forEach((row) => {
        const rowChildren: HTMLCollection = row.children;
        const rowData: Element[] = Object.values(rowChildren) || [];

        let name: string;
        let id: string;
        let nameOptions: Object[] = [];

        rowData.forEach((data) => {
          const dataChildren: Element[] = Object.values(data.children) || [];
          const filterName: Element = dataChildren.filter(
            (element: Element) => element.tagName.toLowerCase() == "span"
          )[0];
          const filterOptions: Element = dataChildren.filter(
            (element: Element) => element.tagName.toLowerCase() == "select"
          )[0];

          if (filterName?.innerHTML) {
            name = filterName.innerHTML;
          }

          if (filterOptions?.children) {
            Object.values(filterOptions?.children).forEach(
              (option: Element) => {
                nameOptions.push({
                  OptionName: option.innerHTML,
                  value: (<HTMLInputElement>option).value,
                });
              }
            );

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

    await fse.unlink("src/finvizFilters.ts");
    const writer = fse.createWriteStream("src/finvizFilters.ts");
    writer.write(`const filters = ${JSON.stringify(options, null, 2)};\n\n`);
    writer.write(`export default filters;`);

    await browser.close();
    spinner.succeed("Done");
  } catch (error) {
    spinner.fail("Something went wrong");
    console.log(error);
  }
}

export async function getScreenedStocks(filterOptions: filterOption[]) {
  const spinner: ora.Ora = ora("Loading...");
  try {
    spinner.start();
    const browser = await puppeteer.launch({ headless: true });
    const page = (await browser.pages())[0];

    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36"
    );

    await page.goto("https://finviz.com/screener.ashx?v=111&ft=4", {
      waitUntil: "networkidle2",
    });

    await page.waitForSelector("button.Button__StyledButton-a1qza5-0.lcqSKB");
    await page.click("button.Button__StyledButton-a1qza5-0.lcqSKB");
    await page.waitForSelector("button.Button__StyledButton-a1qza5-0.lcqSKB");
    await page.click("button.Button__StyledButton-a1qza5-0.lcqSKB");

    for (let i = 0; i < filterOptions.length; i++) {
      if (typeof filterOptions[i]?.options !== "string") return;
      await page.waitForSelector(`#${filterOptions[i].id}`);
      await page.select(
        `#${filterOptions[i].id}`,
        filterOptions[i]?.options.toString()
      );
    }

    await page.waitForSelector("#screener-views-table table.table-light tr");

    const tickers: string[] = await page.$$eval(
      "#screener-views-table table.table-light tr",
      (elements: Element[]) => {
        const tickersSymbols: string[] = [];

        for (let i = 1; i < elements.length; i++) {
          const elementChildren: Element[] = Object.values(
            elements[i].children
          );

          const ticker: string =
            Object.values(elementChildren[1].children)[0].innerHTML ||
            "no ticker";

          tickersSymbols.push(ticker);
        }
        return tickersSymbols;
      }
    );

    await browser.close();
    spinner.succeed("Done");
    return tickers;
  } catch (error) {
    spinner.fail("Something went wrong");
    console.log(error);
  }
}

export async function createFilters() {
  try {
    const userFilters: Object[] = [];

    let prompt1: { key: string };
    let filter: { name: string };
    let prompt2: { isNotDone: boolean; value: string } = {
      isNotDone: true,
      value: "",
    };
    let filterValues: {
      name: string;
      id: string;
      options?: { OptionName: string; value: string }[];
    } = { name: "", id: "" };

    filter = await inquirer.prompt([
      {
        message: "What would you like to name your filter?",
        name: "name",
      },
    ]);

    while (prompt2.isNotDone) {
      prompt1 = await inquirer.prompt([
        {
          type: "list",
          message: "What filter would you like to apply?",
          name: "key",
          choices: () => {
            return options.map((option) => {
              return option.name;
            });
          },
        },
      ]);

      prompt2 = await inquirer.prompt([
        {
          type: "list",
          message: `What value would you like ${prompt1?.key} to have?`,
          name: "value",
          choices: () => {
            filterValues = options.filter(
              (option) => option.name == prompt1.key
            )[0];
            if (!filterValues?.options) return;
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

    await fse.ensureFile("./src/userFilters.ts");
    await fse.appendFile(
      "src/userFilters.ts",
      `\n\nexport const ${filter.name} = ${JSON.stringify(
        userFilters,
        null,
        2
      )}`
    );
  } catch (error) {
    console.log(error);
  }
}
