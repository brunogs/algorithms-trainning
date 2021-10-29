
let prices = [7,1,5,3,6,4]

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let profit = 0;
    let currentPrice = prices[0];

    for (let i = 0; i < prices.length; i++) {
        const difference = (prices[i] - currentPrice)
        if (difference < 0) {
            currentPrice = prices[i];
        } else if (difference > 0) {
            profit += difference;
            currentPrice = prices[i];
        }
    }
    return profit;
};

const result = maxProfit(prices)
console.log(`max profit is ${result}`)