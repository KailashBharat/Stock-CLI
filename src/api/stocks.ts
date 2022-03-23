import "dotenv/config";
import axios from "axios";

interface IS {
  symbol: string;
  annualReports: any;
  quarterlyReports: any;
}

export async function incomeStatement(
  stockSymbol: string,
  option: string
){
  let data: IS;
  try {
    if (!stockSymbol) return console.log("Please enter a stock symbol");

    const result = await axios.get(
      `https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${stockSymbol}&apikey=${process.env.ALPHA_API_KEY}`
    );
    data = result.data;

    if (!data) return console.log("Something went wrong");

    if (option === "quarter") {
      return data.quarterlyReports;
    }else if(option === "year"){
      return data.annualReports;
    }
    return data

  } catch (error) {
    console.log(error);
  }
}
