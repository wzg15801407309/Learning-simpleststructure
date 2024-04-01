/**  LeetCode 热题 100 */
/** 第90题
 * 题目：乘积最大子数组
 * 题解：给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续子数组 （该子数组中至少包含一个数字），并返回该子数组所对应的乘积
 * 方案名称：动态规划
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = (nums) => {
  let max = min = nums[0], dp = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      [max, min] = [min, max]
    }
    max = Math.max(max * nums[i], nums[i])
    min = Math.min(min * nums[i], nums[i])
    dp[i] = max
  }

  return Math.max(...dp)
};