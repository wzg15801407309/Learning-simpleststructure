/**  LeetCode 热题 100 */
/** 第93题
 * 题目：最小路径和
 * 题解：给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。【说明：每次只能向下或者向右移动一步。】
 * 方案名称：xxxx
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = grid => {
  const m = grid.length, n = grid[0].length;
  // 动态定义：dp[i][j] 表示从坐标(i,j) 到右下角的最小路径和
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
  // 状态初始化
  dp[m - 1][n - 1] = grid[m - 1][n - 1];
  // 状态转移
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (i == m - 1 && j != n - 1) { // 如果是最后一行
        dp[i][j] = grid[i][j] + dp[i][j + 1];
      } else if (i != m - 1 && j == n - 1) {// 如果是最后一列
        dp[i][j] = grid[i][j] + dp[i + 1][j];
      } else if (i != m - 1 && j != n - 1) {
        dp[i][j] = grid[i][j] + Math.min(dp[i + 1][j], dp[i][j + 1]);
      }
    }
  }
  return dp[0][0]
};