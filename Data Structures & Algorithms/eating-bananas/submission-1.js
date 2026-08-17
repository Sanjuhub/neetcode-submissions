class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let maxP = 0;
        for (let i = 0; i < piles.length; i++) {
            maxP = Math.max(maxP, piles[i]);
        }

        let l = 1;
        let r = maxP;
        let k = 0;
        let res = r;
        let mid = 0;
        while (l <= r) {
            mid = Math.floor((r + l) / 2);
            k = 0;
            for (let i = 0; i < piles.length; i++) {
                k += Math.ceil(piles[i] / mid);
            }

            if (k <= h) {
                res = Math.min(res, mid);
                r = mid - 1;
            } else if (k > h) {
                l = mid + 1;
            }
        }
        return res;
    }
}
