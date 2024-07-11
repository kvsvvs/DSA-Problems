function maxProfitWithCuts(prices, n, memo = {}) {
  // Base case: If the length of the rope is 0, return profit 0 and no cuts
  if (n <= 0) return { maxProfit: 0, cuts: [] };

  if (n in memo) return memo[n];

  let maxVal = Number.MIN_VALUE;
  let bestCuts = [];

  for (let i = 0; i < n; i++) {
    let result = maxProfitWithCuts(prices, n - i - 1, memo);

    if (prices[i] + result.maxProfit > maxVal) {
      maxVal = prices[i] + result.maxProfit;
      bestCuts = [i + 1, ...result.cuts];
    }
  }

  memo[n] = { maxProfit: maxVal, cuts: bestCuts };
  return memo[n];
}

// Example usage
let prices = [1, 5, 8, 9, 10, 17, 17, 20];
let ropeLength = 8;
let result = maxProfitWithCuts(prices, ropeLength);
console.log("Maximum Profit:", result.maxProfit);
console.log("Cuts:", result.cuts.join(", "));
