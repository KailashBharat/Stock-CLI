import * as userFilters from "../userFilters";
import { getScreenedStocks, filterOption } from "../api/finviz";

export async function screenStocks(filter: string, options: object) {
  let returnedStock: string[] | undefined;
  let stockFilter: filterOption[] =
    userFilters[filter as keyof typeof userFilters];

  if (!stockFilter) return console.log("No filter with that name exists.");

  returnedStock = await getScreenedStocks(stockFilter);
  console.log(returnedStock);

  try {
  } catch (error) {
    console.log(error);
  }
}
