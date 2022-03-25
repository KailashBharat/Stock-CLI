import { fetchStockData } from "../api/stocks";
import IncomeStatement from "../classes/IncomeStatement";

export async function IS_Handler(stock: string, options: Object) {
  if (Object.keys(options).length > 1)
    return console.log("Please specify only one option");

  const option = new IncomeStatement(options);
  let result = [];
  let output = [];

  //FIXME: Make a method that logs the user's option
  console.log(`You chose ${stock.toUpperCase()}`);

  try {

    if (option.searchOption("quarter")) {
      const { quarterlyReports } = await fetchStockData(
        stock,
        "INCOME_STATEMENT"
      );
      result = quarterlyReports;
    } else if (option.searchOption("year")) {
      const { annualReports } = await fetchStockData(stock, "INCOME_STATEMENT");
      result = annualReports;
    }

    option.setData(result);
    output = option.getUserData();

    output.length
      ? console.log(output)
      : console.log("No data found, please try something else");
  } catch (error) {
    console.log(error);
  }
}

export function priceHandler(stock: string, options: Object) {
  const option: string[] = Object.keys(options);
  const optionValue: string[] = Object.values(options);

  if (option.length > 1) return console.log("Please specify only one option");

  console.log(
    `You chose to view the stock prices of ${stock.toUpperCase()}. 
    You have chose to view the stock on a ${option[0]} chart.
    You want to see the stock's price of the last ${optionValue[0]} days`
  );
}
