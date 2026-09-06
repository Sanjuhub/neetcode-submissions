class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let hash = new Map();
        let res = []

        for (let i = 0; i < nums.length; i++) {
            hash.set(nums[i], (hash.get(nums[i]) || 0) + 1);
        }
        console.log("-", hash);

        for(let m of hash){
            // console.log('->', m[1], Math.floor(nums.length / 3))
            if(m[1] > Math.floor(nums.length / 3))
            {
                res.push(m[0])
            }
        }
        return res
    }
}
