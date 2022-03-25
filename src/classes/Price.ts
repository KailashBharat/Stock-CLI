import Option from "./Option"

interface Report {
    fiscalDateEnding: string;
    reportedCurrency: string;
    grossProfit: string;
    netIncome: string;
  }
  
export default class StockPrice extends Option {
    public reports: Report[] = [];
  
    constructor(option: Object) {
      super(option);
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
  