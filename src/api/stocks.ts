import "dotenv/config";
import axios from "axios";

export async function fetchStockData(
  functionType: string,
  symbol?: string,
  optionalInfo: { [key: string]: string } = {}
) {
  let data;
  let URL: string = `https://www.alphavantage.co/query?function=${functionType}&apikey=${process.env.ALPHA_API_KEY}`;
  const FUNCTIONTYPES: string[] = [
    "INCOME_STATEMENT",
    "BALANCE_SHEET",
    "CASH_FLOW",
    "EARNINGS",
    "OVERVIEW",
  ];

  if (FUNCTIONTYPES.includes(functionType) && !symbol)
    return console.log("Please enter a stock symbol");

  if (symbol) URL += `&symbol=${symbol}`;

  for (let i = 0; i < Object.keys(optionalInfo).length; i++) {
    const key: string = Object.keys(optionalInfo)[i];
    const value: string = optionalInfo[key];
    const urlOption: string = `&${key}=${value}`;
    URL += urlOption;
  }

  try {
    const result = await axios.get(URL);
    data = result.data;

    if (!data) return console.log("Something went wrong");

    if (
      data ==
        "symbol,name,ipoDate,priceRangeLow,priceRangeHigh,currency,exchange" ||
      data == "symbol,name,reportDate,fiscalDateEnding,estimate,currency"
    )
      data = "No data found!";
    // console.log(typeof data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

// fetchStockData("EARNINGS_CALENDAR", "ZM");
