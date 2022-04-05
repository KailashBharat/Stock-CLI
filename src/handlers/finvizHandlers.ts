import inquirer from "inquirer";
import options from "../finvizFilters";
import FinvizOptions from "../classes/FinvizOptions";
import fse from "fs-extra";

import * as userFilters from "../userFilters";
import { getScreenedStocks, filterOption } from "../api/finviz";

export async function screenStocks(filter: string, options: object) {
  let returnedStock: string[] | undefined;
  let stockFilter: userFilters.userFilter[] =
    userFilters[filter as keyof typeof userFilters];

  if (!stockFilter) return console.log("No filter with that name exists.");

  returnedStock = await getScreenedStocks(stockFilter);
  console.log(returnedStock);

  try {
  } catch (error) {
    console.log(error);
  }
}

export async function createFilters() {
  const filters: FinvizOptions = new FinvizOptions(options);
  try {
    const userFilters: Object[] = [];

    let prompt1: { key: string };
    let filter: { name: string };
    let prompt2: { isNotDone: boolean; value: string } = {
      isNotDone: true,
      value: "",
    };

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
          choices: filters.getAllOptions(),
        },
      ]);

      prompt2 = await inquirer.prompt([
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
      if (prompt2.value === "None") continue;
      
      userFilters.push({
        name: prompt1.key,
        value: filters.getValueOfOptionName(prompt1.key, prompt2.value),
        id: filters.getIdOfFilter(prompt1.key),
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
    console.log("\nSuccesfully created filter!");
  } catch (error) {
    console.log(error);
  }
}

