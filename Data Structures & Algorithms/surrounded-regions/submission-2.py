class Solution:
    def solve(self, board: List[List[str]]) -> None:
        ROWS, COLS = len(board), len(board[0])
        directions = [[-1, 0], [0, -1], [1, 0], [0, 1]]

        def dfs(r, c):
            if r < 0 or c < 0 or r >= ROWS or c >= COLS or board[r][c] != "O":
                return

            board[r][c] = '#'

            for i, j in directions:
                dfs(r + i, c + j)

        # for i in range(ROWS):
        #     for j in range(COLS):
        #         if i == 0 or j == 0 or i == ROWS - 1 or j == COLS - 1:
        #             if board[i][j] == "O":
        #                 dfs(i, j, "#")
        #         elif board[i][j] == "O":
        #             dfs(i, j, "X")

        # print("-----", board)
        # for i in range(ROWS):
        #     for j in range(COLS):
        #         if i == 0 or j == 0 or i == ROWS - 1 or j == COLS - 1:
        #             if board[i][j] == "#":
        #                 dfs(i, j, "O")
    
        for r in range(ROWS):
            dfs(r, 0)
            dfs(r, COLS - 1)

        for c in range(COLS):
            dfs(0, c)
            dfs(ROWS - 1, c)
        
        # print('->>>>', board)
        for r in range(ROWS):
            for c in range(COLS):
                if board[r][c] == "O":
                    board[r][c] = "X"
                elif board[r][c] == "#":
                    board[r][c] = "O"
        
