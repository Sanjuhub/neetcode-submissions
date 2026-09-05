class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let buy = 0;
        for (let i = 0; i < prices.length; i++) {
            if (i == 0) {
                buy = prices[i];
            } else {
                if (buy < prices[i]) {
                    profit += prices[i] - buy;
                }
                // else {
                //     profit += prices[i] - buy;
                // }
                buy = prices[i];
            }
        }
        return profit;
    }
}
