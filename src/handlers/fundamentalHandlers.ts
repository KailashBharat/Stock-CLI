export function IS_Handler(stock: string, options: Object) {
  const key: string[] = Object.keys(options);
  const value: string[] = Object.values(options);

  console.log(`You chose ${stock.toUpperCase()}`);
  console.log(key[0], value[0]);
}

export function priceHandler(stock: string, options: Object) {
  const option: string[] = Object.keys(options);

  if (option.length > 1) return console.log("Please specify only one option");

  console.log(
    `You chose to view the stock prices of ${stock.toUpperCase()}. You have chose to view the stock on a ${
      option[0]
    } chart.`
  );
}
