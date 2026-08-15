class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = new Array(temperatures.length).fill(0);
        let stack = [];
        for (let i = 0; i < temperatures.length; i++) {
            if (i == 0) {
                stack.push(i);
                continue;
            }
            // console.log('->', stack, i)
            while (temperatures[stack[stack.length - 1]] < temperatures[i]) {
                // console.log('->>>', i, stack[stack.length - 1])
                res[stack[stack.length - 1]] = i - stack[stack.length - 1];
                stack.pop();
            }
            stack.push(i);
        }

        return res;
    }
}
