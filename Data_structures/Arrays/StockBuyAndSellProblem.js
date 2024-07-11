function stockBuyAndSell(arr) {
  let profit = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      profit += arr[i + 1] - arr[i];
    }
  }
  return profit;
}
const prices = [100, 180, 260, 310, 40, 535, 695];
const totalProfit = stockBuyAndSell(prices);
console.log("Total Profit:", totalProfit);
