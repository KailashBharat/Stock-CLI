import puppeteer from "puppeteer";
import util from "util";
import fse from "fs-extra";
import ora from "ora-classic";
import * as all from "../userFilters";

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

export async function getScreenedStocks(filterOptions: all.userFilter[]) {
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

    await page.waitForSelector("button.Button__StyledButton-a1qza5-0");
    await page.click("button.Button__StyledButton-a1qza5-0");
    await page.waitForSelector("button.Button__StyledButton-a1qza5-0");
    await page.click("button.Button__StyledButton-a1qza5-0");

    for (let i = 0; i < filterOptions.length; i++) {
      await page.waitForSelector(`#${filterOptions[i].id}`);
      await page.select(`#${filterOptions[i].id}`, filterOptions[i].value);
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
    // await page.waitForTimeout(5_000_000);
    await browser.close();
    spinner.succeed("Done");
    return tickers;
  } catch (error) {
    spinner.fail("Something went wrong");
    console.log(error);
  }
}
