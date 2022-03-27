import puppeteer from "puppeteer";

interface filterOption {
  name: string;
  id: string;
  options: string[];
}

export default async function screenStocks() {
  const browser = await puppeteer.launch({ headless: false });
  const page = (await browser.pages())[0];

  await page.goto("https://finviz.com/screener.ashx?v=111&ft=4", {
    waitUntil: "networkidle2",
  });
  await page.waitForSelector("button.Button__StyledButton-a1qza5-0.lcqSKB");
  await page.click("button.Button__StyledButton-a1qza5-0.lcqSKB");
  await page.waitForSelector("button.Button__StyledButton-a1qza5-0.lcqSKB");
  await page.click("button.Button__StyledButton-a1qza5-0.lcqSKB");

  const options = await page.evaluate(() => {
    const tableChildren: HTMLCollection | string =
      document.querySelector("#filter-table-filters > tbody")?.children ||
      "No children";
    const tableRows: Element[] = Object.values(tableChildren);
    const screeningOptions: filterOption[] = [];

    tableRows.forEach((row) => {
      const rowChildren: HTMLCollection = row.children;
      const rowData: Element[] = Object.values(rowChildren) || [];

      const filter: filterOption = { name: "", id: " ", options: [] };

      rowData.forEach((data, index) => {
        const dataChildren: Element[] = Object.values(data.children) || [];
        const filterName: Element = dataChildren.filter(
          (element: Element) => element.tagName.toLowerCase() == "span"
        )[0];
        const filterOptions: Element = dataChildren.filter(
          (element: Element) => element.tagName.toLowerCase() == "select"
        )[0];
        console.log({ index, name:filterName?.innerHTML, filterOptions });

        if (filterName?.innerHTML) {
          filter.name = filterName?.innerHTML;
        }

        if (filterOptions?.children) {
          Object.values(filterOptions?.children).forEach((option: Element) => {
            filter.options.push(option.innerHTML);
          });
          filter.id = filterOptions.id;
          screeningOptions.push(filter);
          filter.name = " ";
          filter.id = "";
          filter.options = [];
        }
      });
    });

    console.log(screeningOptions);
  });

  await page.waitForTimeout(5_000_000);
  await browser.close();
}

screenStocks();
