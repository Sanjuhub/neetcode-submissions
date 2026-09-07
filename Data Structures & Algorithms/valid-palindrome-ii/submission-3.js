class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let l = 0,
            r = s.length - 1;
        while (l <= r) {
            if (s[l] == s[r]) {
                l++;
                r--;
                continue;
            } else {
                if (
                    this.checkPalindrome(s.slice(0, l) + s.slice(l + 1, s.length)) ||
                    this.checkPalindrome(s.slice(0, r) + s.slice(r + 1, s.length))
                ) {
                    l++;
                    r--;
                    return true;
                } else {
                    return false;
                }
            }
        }

        return true;
    }

    checkPalindrome(str) {
        if (str == [...str].reverse().join("")) {
            return true;
        }
        return false;
    }
}
