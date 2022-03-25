import { fetchStockData } from "../api/stocks";
import IncomeStatement from "../classes/IncomeStatement";
import StockPrice from "../classes/price";

export async function IS_Handler(stock: string, options: Object) {
  if (Object.keys(options).length > 1)
    return console.log("Please specify only one option");

  const option = new IncomeStatement(options);
  let output = [];

  //FIXME: Make a method that logs the user's option
  console.log(`You chose ${stock.toUpperCase()}`);

  try {
    if (option.searchOption("quarter")) {
      const { quarterlyReports } = await fetchStockData(
        stock,
        "INCOME_STATEMENT"
      );
      option.setData(quarterlyReports);
    } else if (option.searchOption("year")) {
      const { annualReports } = await fetchStockData(stock, "INCOME_STATEMENT");
      option.setData(annualReports);
    }

    output = option.getUserData();

    output.length
      ? console.log(output)
      : console.log("No data found, please try something else");
  } catch (error) {
    console.log(error);
  }
}

export async function priceHandler(stock: string, options: Object) {
  if (Object.keys(options).length > 1)
    return console.log("Please specify only one option");

  const option = new StockPrice(options);
  let result: any;
  let period: string;

  try {
    if (option.searchOption("daily")) {
      result = await fetchStockData(stock, "TIME_SERIES_DAILY");
    } else if (option.searchOption("weekly")) {
      result = await fetchStockData(stock, "TIME_SERIES_WEEKLY");
    } else if (option.searchOption("monthly")) {
      result = await fetchStockData(stock, "TIME_SERIES_MONTHLY");
    }
    period = Object.keys(result)[1];
    option.setData(result[period]);
    console.log(option.getUserData());
  } catch (error) {
    console.log(error);
  }
}
