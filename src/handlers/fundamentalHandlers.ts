import { fetchStockData } from "../api/stocks";
import FundamentalData from "../classes/FundamentalData";
import StockPrice from "../classes/price";

export async function fundamentalHandler(
  fundamentalFunction: string,
  stock?: string,
  options: { [key: string]: string } = {}
) {
  if (Object.keys(options).length > 1)
    return console.log("Please specify only one option");

  const option: FundamentalData = new FundamentalData(options);
  let output: object[] = [];
  let returnType;

  //FIXME: Make a method that logs the user's option
  if (stock) console.log(`You chose ${stock.toUpperCase()}`);

  try {
    if (option.searchOption("quarter")) {
      const { quarterlyReports, quarterlyEarnings } = await fetchStockData(
        fundamentalFunction,
        stock
      );
      returnType = quarterlyReports || quarterlyEarnings;

      if (!returnType) {
        console.log("Invalid ticker, please try again!");
        return;
      }
      option.setData(returnType);
      output = option.getUserData();
    } else if (option.searchOption("year")) {
      const { annualReports, annualEarnings } = await fetchStockData(
        fundamentalFunction,
        stock
      );
      returnType = annualReports || annualEarnings;

      if (!returnType) {
        console.log("Invalid ticker, please try again!");
        return;
      }
      option.setData(returnType);
      output = option.getUserData();
    } else {
      output = await fetchStockData(fundamentalFunction, stock, options);
      console.log(output);
      return;
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
  let finalResult: object;

  try {
    if (option.searchOption("daily")) {
      userOption = "TIME_SERIES_DAILY";
    } else if (option.searchOption("weekly")) {
      userOption = "TIME_SERIES_WEEKLY";
    } else if (option.searchOption("monthly")) {
      userOption = "TIME_SERIES_MONTHLY";
    }

    result = await fetchStockData(userOption, stock);

    if (!result) {
      console.log("Invalid ticker, please try again!");
      return;
    }

    period = Object.keys(result)[1];
    option.setData(result[period]);
    finalResult = option.getUserData();

    if (!Object.keys(finalResult).length) {
      console.log(`No data for ${stock}`);
      return;
    }

    console.log(finalResult);
  } catch (error) {
    console.log(error);
  }
}
