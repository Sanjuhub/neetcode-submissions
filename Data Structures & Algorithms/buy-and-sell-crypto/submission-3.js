class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0,
            b = 0,
            s = 1;
        let i = 1;
        if(prices.length < 2)
            return 0
        while (i <= prices.length) {
            if (prices[s] <= prices[b]) {
                b = s;
                s = i++;
            } else {
                max = Math.max(prices[s] - prices[b], max);
                s = i++;
            }
            
        }
        return max;
    }
}
