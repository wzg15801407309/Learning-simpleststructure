/**  LeetCode 热题 100 */
/** 第97题
 * 题目： N 皇后【按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。】
 * 题解：按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
 * 方案名称：回溯 -太难了没有可能明白
 */
var solveNQueens = function (n) {
  const ans = [];
  const col = new Array(n).fill(0);
  const onPath = new Array(n).fill(false);
  const diag1 = new Array(n * 2 - 1).fill(false);
  const diag2 = new Array(n * 2 - 1).fill(false);
  function dfs(r) {
    if (r === n) {
      ans.push(col.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - 1 - c)));
      return;
    }
    for (let c = 0; c < n; c++) {
      if (!onPath[c] && !diag1[r + c] && !diag2[r - c]) {
        col[r] = c;
        onPath[c] = diag1[r + c] = diag2[r - c] = true;
        dfs(r + 1);
        onPath[c] = diag1[r + c] = diag2[r - c] = false; // 恢复现场
      }
    }
  }
  dfs(0);
  return ans;
};