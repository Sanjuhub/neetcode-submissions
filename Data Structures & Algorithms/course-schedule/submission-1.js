class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const preMap = new Map();

        for (let i = 0; i < numCourses; i++) {
            preMap.set(i, []);
        }

        for (let [c, p] of prerequisites) {
            preMap.get(c).push(p);
        }

        const visited = new Set();

        function dfs(c) {
            if (visited.has(c)) return false;

            if (preMap.get(c) == []) return false;

            visited.add(c);
            for (let pre of preMap.get(c)) {
                if (!dfs(pre)) {
                    return false;
                }
            }

            visited.delete(c)
            preMap.set(c, [])
            return true;
        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) {
                return false;
            }
        }
        return true;
    }
}
