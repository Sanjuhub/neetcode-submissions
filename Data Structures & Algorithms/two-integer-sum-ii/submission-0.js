class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0;
        let h = numbers.length - 1;
        let ans = [];

        while (l != h) {
            if (numbers[l] + numbers[h] == target) {
                break;
            }
            if (numbers[l] + numbers[h] > target) {
                h--;
            } else if (numbers[l] + numbers[h] < target) {
                l++;
            }
        }
        ans.push(l+1);
        ans.push(h+1);

        return ans;
    }
}
