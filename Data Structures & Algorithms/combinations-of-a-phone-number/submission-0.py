class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        res = []
        letMap = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz",
        }

        def dfs(s, l):
            if len(s) == len(digits):
                res.append(s)
                return

            for i in letMap[digits[l]]:
                dfs(s + i, l + 1)

        

        if digits:
            dfs('', 0)
        return res
