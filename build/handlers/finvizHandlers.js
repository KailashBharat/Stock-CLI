"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFinvizOptions = void 0;
async function getFinvizOptions(tableRows) {
    const screeningOptions = [];
    tableRows.forEach((row) => {
        const rowChildren = row.children;
        const rowData = Object.values(rowChildren) || [];
        let name;
        let id;
        let nameOptions = [];
        rowData.forEach((data) => {
            const dataChildren = Object.values(data.children) || [];
            const filterName = dataChildren.filter((element) => element.tagName.toLowerCase() == "span")[0];
            const filterOptions = dataChildren.filter((element) => element.tagName.toLowerCase() == "select")[0];
            if (filterName?.innerHTML) {
                name = filterName.innerHTML;
            }
            if (filterOptions?.children) {
                Object.values(filterOptions?.children).forEach((option) => {
                    nameOptions.push({
                        OptionName: option.innerHTML,
                        value: option.value,
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
exports.getFinvizOptions = getFinvizOptions;
