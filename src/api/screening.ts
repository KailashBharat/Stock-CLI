import puppeteer from "puppeteer";
import util from "util";
import fse from "fs-extra";

interface filterOption {
  name: string;
  id: string;
  options: Object[];
}

export default async function getFinvizFilterOptions() {
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
          Object.values(filterOptions?.children).forEach((option: Element) => {
            nameOptions.push({
              OptionName: option.innerHTML,
              value: (<HTMLInputElement>option).value,
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

  await fse.unlink("src/keys.ts");
  const writer = fse.createWriteStream("src/keys.ts");
  writer.write(`const keys = ${JSON.stringify(options, null, 2)};\n`);
  writer.write(`export default keys;`);

  await page.select("#fs_exch", "nasd");

  // console.log(util.inspect(options, false, null, true));

  await page.waitForTimeout(5_000_000);
  await browser.close();
}

getFinvizFilterOptions();
