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
            // b = i
            // s = i+1

            if (prices[s] <= prices[b]) {
                console.log('Iff ->>>> s',s,'-', prices[s], 'b->',b,'-', prices[b])
                b = s;
                s = i++;
            } else {
                console.log("Else->>>> s", s, "-", prices[s], "b->", b, "-", prices[b]);

                max = Math.max(prices[s] - prices[b], max);
                s = i++;
            }
            // console.log("->>", prices[s], prices[b], i, max);

            // let diff = prices[s] - prices[b]
            // console.log('-<<', diff, b, s)
            // if(diff < 0){
            //     b = s
            //     s = i
            // }
            // else{
            //     max = Math.max(diff, max)

            // }
        }
        return max;
    }
}
