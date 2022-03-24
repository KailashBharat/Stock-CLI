interface Report {
  fiscalDateEnding: string;
  reportedCurrency: string;
  grossProfit: string;
  netIncome: string;
}

export default class IncomeStatement {
  public option: string;
  public value: string;
  public reports: Report[] = [];

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

  public setData(reports: Report[]): void {
    this.reports = reports;
  }

  public getUserData(): Report[] {
    let result: Report[] = [];
    if (this.option.search("last") >= 0) {
      result = this.reports.splice(0, parseInt(this.value));
    } else if (this.option.search("find") >= 0) {
      result = this.reports.filter(
        (report) => report.fiscalDateEnding.search(this.value) >= 0
      );
      return result;
    }

    return result;
  }
}
