import { fetchStockData } from "../api/stocks";
import FundamentalData from "../classes/FundamentalData";
import StockPrice from "../classes/price";

export async function fundamentalHandler(
  fundamentalFunction: string,
  stock?: string,
  options: Object = {}
) {
  if (Object.keys(options).length > 1)
    return console.log("Please specify only one option");

  const option: FundamentalData = new FundamentalData(options);
  let output: Object[] = [];

  //FIXME: Make a method that logs the user's option
  if (stock) console.log(`You chose ${stock.toUpperCase()}`);

  try {
    if (option.searchOption("quarter")) {
      const { quarterlyReports } = await fetchStockData(
        fundamentalFunction,
        stock
      );
      option?.setData(quarterlyReports);
      output = option.getUserData();
    } else if (option.searchOption("year")) {
      const { annualReports } = await fetchStockData(
        fundamentalFunction,
        stock
      );
      option.setData(annualReports);
      output = option.getUserData();
    } else {
      output.push(await fetchStockData(fundamentalFunction, stock));
    }

    output.length
      ? console.log(output)
      : console.log("No data found, please try something else");
  } catch (error) {
    console.log(error);
  }
}

export async function priceHandler(stock: string, options: Object) {
  if (Object.keys(options).length > 1 || Object.keys(options).length == 0)
    return console.log("Please specify only one option");

  const option = new StockPrice(options);
  let result: any;
  let period: string;
  let userOption: string = "TIME_SERIES_DAILY";

  try {
    if (option.searchOption("daily")) {
      userOption = "TIME_SERIES_DAILY";
    } else if (option.searchOption("weekly")) {
      userOption = "TIME_SERIES_WEEKLY";
    } else if (option.searchOption("monthly")) {
      userOption = "TIME_SERIES_MONTHLY";
    }

    result = await fetchStockData(userOption, stock);
    period = Object.keys(result)[1];

    option.setData(result[period]);
    console.log(option.getUserData());
  } catch (error) {
    console.log(error);
  }
}
