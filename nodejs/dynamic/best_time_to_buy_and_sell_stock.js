
// const prices = [7,1,5,3,6,4]
// const prices = [2,4,1]
const prices = [3,2,6,5,0,3]

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let lowerPrice = 0
    let maximumPrice = 0
    let bestProfit = 0

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < prices[lowerPrice]) {
            const currentResult = prices[maximumPrice] - prices[lowerPrice]
            if (currentResult > bestProfit) {
                bestProfit = currentResult
            }
            lowerPrice = i
            maximumPrice = i
        }
        if (prices[i] > prices[maximumPrice]) {
            maximumPrice = i
        }
    }
    console.log(`${lowerPrice} --- ${maximumPrice}`)
    const difference = prices[maximumPrice] - prices[lowerPrice]
    return difference > bestProfit ? difference : bestProfit;
};

const result = maxProfit(prices)
console.log(`max profit is ${result}`)