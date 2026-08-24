class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let sorted = stones;
        let i = 0;

        while (sorted.length > 1) {
            sorted = stones.sort((a, b) => a - b);
            let a = sorted.pop();
            let b = sorted.pop();

            if (a !== b) {
                sorted.push(a - b);
            }

            i++;
        }

        return sorted.length > 0 ? sorted[0] : 0;
    }
}
