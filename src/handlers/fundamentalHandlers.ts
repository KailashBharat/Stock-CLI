import { incomeStatement } from "../api/stocks";
import Option from "../classes/option";

export async function IS_Handler(stock: string, options: Object) {
  const option = new Option(options);
  let result = [];
  let output = [];

  console.log(`You chose ${stock.toUpperCase()}`);

  if (option.isQuarter()) result = await incomeStatement(stock, "quarter");
  if (option.isYear()) result = await incomeStatement(stock, "year");

  option.setData(result);
  output = option.getUserData();

  output.length
    ? console.log(output)
    : console.log("No data found, please try something else");
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
