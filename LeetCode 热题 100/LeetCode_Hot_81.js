/**  LeetCode 热题 100 */
/** 第81题
 * 题目：买卖股票的最佳时机
 * 题解：给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 * 方案名称：贪心算法
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let len = prices.length;
  let maxProfit = 0;
  let maxPries = prices[len - 1];
  for (let i = len - 2; i >= 0; i--) {
    maxProfit = Math.max(maxProfit, maxPries - prices[i]);
    maxPries = Math.max(maxPries, prices[i]);
  }
  return maxProfit;
};