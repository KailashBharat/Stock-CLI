import Option from "./Option";

interface PriceInformation {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. volume": string;
}

interface StockPrices {
  [key: string]: PriceInformation;
}

export default class StockPrice extends Option {
  public prices: StockPrices = {};

  constructor(option: Object) {
    super(option);
  }

  public setData(prices: StockPrices): void {
    this.prices = prices;
  }

  public getUserData(): StockPrices {
    let result: StockPrices = {};
    const keys = Object.keys(this.prices);
    for (let i = 0; i < parseInt(this.value); i++) {
      const key = keys[i];
      result[key] = this.prices[key];
    }
    return result;
  }
}
