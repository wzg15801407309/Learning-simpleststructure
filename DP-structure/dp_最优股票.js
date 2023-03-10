
/** 
 * 动态规划
 * 题意：给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 *  你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票
 * 
 * 理解：两个数据相减最大值  -- 注意：自己的思路不行【2，4，1】 这个测试通过不了
 * 
 */

const prices = [7, 1, 5, 3, 6, 4]
let myMaxProfit = function (params) {
  if (params.length <= 1) { return 0 }
  if (params.length == 2 && params[1] - params[0] <= 0) {
    return 0
  }
  // 找到最小价格和位置
  let minIndex = 0;
  let minVal = params[minIndex];
  params.forEach((val, index) => {
    if (minVal > val) {
      minIndex = index;
      minVal = val
    }
  });
  // console.log(minIndex, minVal);
  // 如果最小值是最后 返回0
  if (minIndex == params.length) { return 0 };
  let maxval = minVal;
  for (let index = minIndex; index < params.length; index++) {
    if (params[index] > maxval) {
      maxval = params[index];
    }
  }
  return maxval - minVal
}

myMaxProfit(prices);

/**
 * @param {number[]} prices
 * @return {number}
 */
let prices1 = [2, 4, 1];
let maxProfit = function (prices) {
  let len = prices.length
  if (len < 2) return 0;
  // 最大利润值
  let res = 0;
  // 最小的价格
  let minPrices = prices[0]
  for (let i = 1; i < len; i++) {
    res = Math.max(res, prices[i] - minPrices)
    minPrices = Math.min(minPrices, prices[i])
  }
  return res
};
console.log(maxProfit(prices1));