import "dotenv/config";
import axios from "axios";

export async function incomeStatement(
  stockSymbol: string
): Promise<void> {
  try {
    if (!stockSymbol) return console.log("Please enter a stock symbol");

    const { data } = await axios.get(
      `https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${stockSymbol}&apikey=${process.env.ALPHA_API_KEY}`
    );

    if (!data) return console.log("Something went wrong");

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
