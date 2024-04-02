/**  LeetCode 热题 100 */
/** 第91题
 * 题目：分割等和子集
 * 题解：给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。 
 * 方案名称：动态规划
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = (nums) => {
  const n = nums.length;
  if (n < 2) {
    return false;
  }
  let sum = 0, maxNum = 0;
  for (const num of nums) {
    sum += num;
    maxNum = maxNum > num ? maxNum : num;
  }
  if (sum & 1) {
    return false;
  }
  const target = Math.floor(sum / 2);
  if (maxNum > target) {
    return false;
  };
  const dp = new Array(n).fill(0).map(() => new Array(target + 1, false));
  for (let i = 0; i < n; i++) {
    dp[i][0] = true;
  }
  dp[0][nums[0]] = true;
  for (let i = 1; i < n; i++) {
    const num = nums[i];
    for (let j = 1; j <= target; j++) {
      if (j >= num) {
        dp[i][j] = dp[i - 1][j] | dp[i - 1][j - num];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[n - 1][target];
};