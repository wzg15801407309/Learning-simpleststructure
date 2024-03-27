/**  LeetCode 热题 100 */
/** 第89题
 * 题目：最长递增子序列 （给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。）
 * 题解：子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列
 * 方案名称：【动态规划、贪心+二分】JS版本
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = (nums) => {
  /**
   * 动态规划
   * 利用dp数组存放nums中每个元素之间能够组成的严格递增的最长序列的长度
   * 对于某个元素n而言其最常的序列则为Max(dp[n-1],dp[n-2]);
   * dp[0]+1 即可
   */

  // 记录严格递增的最长序列
  let maxLength = 1;
  // 初始化dp数组 值全为1；
  let dp = new Array(nums.length).fill(1);
  // 编列nums数组
  for (let i = 1; i < nums.length; i++) {
    // 编列当前数前面的数
    for (let j = 0; j < i; j++) {
      // 如果比当前元素小 就能成序列
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        maxLength = Math.max(dp[i], maxLength);
      }
    }
  }
  return maxLength;
};