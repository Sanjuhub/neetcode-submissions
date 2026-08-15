class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let arr = [];
        let stack = [];
        for (let i = 0; i < speed.length; i++) {
            arr.push([position[i], speed[i]]);
        }
        // console.log('->', arr)

        arr.sort((a, b) => b[0] - a[0]);
        for (let i = 0; i < arr.length; i++) {
            // console.log('->', stack)
            stack.push((target - arr[i][0]) / arr[i][1]);
            if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
                stack.pop();
            }
        }

        return stack.length;
    }
}
