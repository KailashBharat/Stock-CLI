interface Report {
  fiscalDateEnding: string;
  reportedCurrency: string;
  grossProfit: string;
  netIncome: string;
}

export default class Option {
  public option: string;
  public value: string;
  public data: Report[] = []

  constructor(option: Object) {
    this.option = Object.keys(option)[0];
    this.value = Object.values(option)[0];
  }

  public isQuarter(): boolean {
    const match = this.option.toLowerCase().search("quarter");
    if (match === -1) {
      return false;
    }
    return true;
  }

  public isYear(): boolean {
    const match = this.option.toLowerCase().search("year");
    if (match === -1) {
      return false;
    }
    return true;
  }
}
