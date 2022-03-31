interface filterOption {
  name: string;
  id: string;
  options: Object[];
}

export async function getFinvizOptions() {
  const tableChildren: HTMLCollection | string =
    document.querySelector("#filter-table-filters > tbody")?.children ||
    "No children";
  const tableRows: Element[] = Object.values(tableChildren);
  const screeningOptions: filterOption[] = [];

  tableRows.forEach((row) => {
    const rowChildren: HTMLCollection = row.children;
    const rowData: Element[] = Object.values(rowChildren) || [];

    let name: string;
    let id: string;
    let nameOptions: Object[] = [];

    rowData.forEach((data) => {
      const dataChildren: Element[] = Object.values(data.children) || [];
      const filterName: Element = dataChildren.filter(
        (element: Element) => element.tagName.toLowerCase() == "span"
      )[0];
      const filterOptions: Element = dataChildren.filter(
        (element: Element) => element.tagName.toLowerCase() == "select"
      )[0];

      if (filterName?.innerHTML) {
        name = filterName.innerHTML;
        console.log("hasFilterName", filterName.innerHTML);
      }

      if (filterOptions?.children) {
        Object.values(filterOptions?.children).forEach((option: Element) => {
          nameOptions.push({
            OptionName: option.innerHTML,
            value: (<HTMLInputElement>option).value,
          });
        });

        id = filterOptions.id;
        screeningOptions.push({ name: name, id: id, options: nameOptions });

        name = " ";
        id = "";
        nameOptions = [];
      }
    });
  });

  return screeningOptions;
}
