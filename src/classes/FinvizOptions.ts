interface finvizOption {
  name: string;
  id: string;
  options: { OptionName: string; value: string }[];
}

export default class FinvizOptions {
  public filters: finvizOption[];

  constructor(filters: finvizOption[]) {
    this.filters = filters;
  }

  public findFilter(desiredFilter: string): string | finvizOption {
    const foundFilter: finvizOption = this.filters.filter(
      (filter) => filter.name.toLowerCase() === desiredFilter.toLowerCase()
    )[0];

    if (!foundFilter) return "No filter found with that name";
    return foundFilter;
  }

  public getFilterOptionNames(desiredFilter: string): string[] | string {
    const filter: finvizOption | string = this.findFilter(desiredFilter);
    const optionNames: string[] = [];

    if (typeof filter === "string") return filter;

    for (let i = 0; i < filter.options.length; i++) {
      if (filter.options[i].OptionName.search("Custom") >= 0) continue;
      if (filter.options[i].OptionName.search("Any") >= 0) continue;
      optionNames.push(filter.options[i].OptionName);
    }

    if(!optionNames.length) return ["None"]

    return optionNames;
  }

  public getValueOfOptionName(
    desiredFilter: string,
    optionName: string
  ): string {
    const filter: finvizOption | string = this.findFilter(desiredFilter);

    if (typeof filter === "string") return filter;

    const data = filter.options.filter(
      (option) => option.OptionName.toLowerCase() === optionName.toLowerCase()
    )[0];
    return data.value;
  }

  public getAllOptions(): string[] {
    const options: string[] = this.filters.map((filter) => filter.name);

    return options;
  }

  public getIdOfFilter(desiredFilter: string): string {
    const filter: finvizOption | string = this.findFilter(desiredFilter);

    if (typeof filter === "string") return filter;
    return filter.id;
  }
}
