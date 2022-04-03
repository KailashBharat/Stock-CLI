export default class Option {
  public option: string;
  public value: string;

  constructor(option: Object) {
    this.option = Object.keys(option)[0];
    this.value = Object.values(option)[0];
  }

  public searchOption(searchString: string): boolean {
    if (!this.option) return false;
    const match = this?.option.toLowerCase().search(searchString);
    if (match === -1) {
      return false;
    }
    return true;
  }
}
