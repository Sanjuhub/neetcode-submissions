class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */

    isHappy(n) {
        let num = new Set();
        function happy(n, num) {
            if (n == 1) {
                return true;
            }

            if (num.has(n)) {
                return false;
            }

            num.add(n);
            let t = n.toString().split("");

            let sum = 0;
            for (let i of t) {
                sum += i * i;
            }
            return happy(sum, num);
        }
        return happy(n, num);
    }
}
