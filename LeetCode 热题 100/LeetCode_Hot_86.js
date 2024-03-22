/**  LeetCode 热题 100 */
/** 第86题
 * 题目：完全平方数
 * 题解：给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。
 * 方案名称：动态规划
 */
/**
 * @param {number} n
 * @return {number}
 */
const numSquares = n => {
  const f = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    let minn = Number.MAX_VALUE;
    for (let j = 1; j * j <= i; j++) {
      minn = Math.min(minn, f[i - j * j]);
    }
    f[i] = minn + 1;
  }
  return f[n];
};