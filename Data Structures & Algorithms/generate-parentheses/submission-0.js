class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let res = [];
        let stack = [];

        function backtrack(openN, closeN) {
            if (openN == closeN && closeN == n) {
                res.push(stack.join(""));
            }

            if (openN < n) {
                stack.push("(");
                backtrack(openN + 1, closeN);
                stack.pop();
            }
            if (closeN < openN) {
                stack.push(")");
                backtrack(openN, closeN + 1);
                stack.pop();
            }
        }

        backtrack(0, 0);
        return res;
    }
}
