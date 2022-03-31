import puppeteer from "puppeteer";
import util from "util";
import fse from "fs-extra";

interface filterOption {
  name: string;
  id: string;
  options: Object[];
}

interface filterIDAndOption {
  id: string;
  option: string;
}

export async function setFinvizFilterOptions() {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = (await browser.pages())[0];

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
            console.log("hasFilterName", filterName.innerHTML);
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

    await fse.unlink("src/keys.ts");
    const writer = fse.createWriteStream("src/keys.ts");
    writer.write(`const keys = ${JSON.stringify(options, null, 2)};\n`);
    writer.write(`export default keys;`);

    await page.select("#fs_exch", "nasd");
    await page.waitForTimeout(5_000_000);
    await browser.close();

    // console.log(util.inspect(options, false, null, true));
  } catch (error) {
    console.log(error);
  }
}

export async function getScreenedStock(filterOptions: filterIDAndOption[]) {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = (await browser.pages())[0];

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

    console.log(tickers);

    await page.waitForTimeout(5_000_000);
    await browser.close();
  } catch (error) {
    console.log(error);
  }
}

const testArray: filterIDAndOption[] = [
  {
    id: "fs_exch",
    option: "nasd",
  },
  {
    id: "fs_idx",
    option: "sp500",
  },
];

getScreenedStock(testArray);
