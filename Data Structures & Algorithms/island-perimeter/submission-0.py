class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        visited = set()
        ROWS, COLS = len(grid), len(grid[0])

        def dfs(r, c):
            if r >= ROWS or c >= COLS or r < 0 or c < 0 or grid[r][c] == 0:
                return 1
            if (r, c) in visited:
                return 0

            visited.add((r, c))

            perim = dfs(r, c + 1)
            perim += dfs(r + 1, c)
            perim += dfs(r, c - 1)
            perim += dfs(r - 1, c)

            return perim

        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c]:
                    return dfs(r, c)
