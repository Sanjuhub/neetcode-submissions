class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        ROWS, COLS = len(grid), len(grid[0])

        q = deque()
        time, fresh = 0, 0

        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c] == 1:
                    fresh += 1

                if grid[r][c] == 2:
                    q.append([r, c])

        directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
        while q and fresh > 0:
            for i in range(len(q)):
                x, y = q.popleft()

                for dr, dc in directions:
                    ro, co = dr + x, dc + y

                    if ro < 0 or ro == ROWS or co < 0 or co == COLS or grid[ro][co] != 1:
                        continue

                    grid[ro][co] = 2
                    q.append([ro, co])
                    fresh -= 1
            time += 1
        return time if fresh == 0 else -1
