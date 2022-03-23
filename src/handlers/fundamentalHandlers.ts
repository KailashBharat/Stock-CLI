import { incomeStatement } from "../api/stocks";
import Option from "../classes/option";

export async function IS_Handler(stock: string, options: Object) {
    const option = new Option(options);
    let result;

  console.log(`You chose ${stock.toUpperCase()}`);
  console.log(option.isQuarter());

//   result = await incomeStatement(stock, option[0]);
//   console.log(result);
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
