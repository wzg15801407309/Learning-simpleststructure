/** 
 * 动态规划
 * 题意：假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次可以走1阶和2阶 有多少种方式可以走完n 阶梯
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
let climbStairs = function (n) {
  if (n <= 1) return 1;
  var dp = new Array(n + 1);
  dp[1] = 1;
  dp[2] = 2;
  for (var i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
console.log(climbStairs(5));
