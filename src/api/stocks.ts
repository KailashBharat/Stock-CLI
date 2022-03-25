import "dotenv/config";
import axios from "axios";


export async function fetchStockData(
  stockSymbol: string,
  functionType: string
){
  let data;
  try {
    if (!stockSymbol) return console.log("Please enter a stock symbol");

    const result = await axios.get(
      `https://www.alphavantage.co/query?function=${functionType}&symbol=${stockSymbol}&apikey=${process.env.ALPHA_API_KEY}`
    );
    data = result.data;

    if (!data) return console.log("Something went wrong");
    return data

  } catch (error) {
    console.log(error);
  }
}
