class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */

    isHappy(n) {
        let num = new Set();
        let res = false;
        function happy(n, num, res) {
            if (n == 1) {
                console.log('->', res)
                res = true;
                console.log('->', res)
                return true;
            }

            if (num.has(n)) {
                res = false;
                return false;
            }

            num.add(n);
            let t = n.toString().split("");

            let sum = 0;
            for (let i of t) {
                sum += i * i;
            }
            console.log('->>', sum, num)
            return happy(sum, num, res);
        }
        return happy(n, num, res);
        return res;
    }
}
