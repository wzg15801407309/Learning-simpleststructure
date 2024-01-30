/**  LeetCode 热题 100 */
/** 第62题
 * 题目：爬楼梯
 * 题解：假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 方案名称：动态规划
 */
/**
 * @param {number} n
 * @return {number}
 */
let climbStairs = (n) => {
  let p = 0, q = 0, r = 1;
  for (let i = 0; i <= n; ++i) {
    p = q;
    q = r;
    r = q + r;
  }
  return r;
};