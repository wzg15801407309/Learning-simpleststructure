
/** 
 * 动态规划
 * 题意：给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 *  你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票
 * 
 * 理解：两个数据相减最大值
 * 
 */
const prices = [7, 6, 1, 3, 1]
let myMaxProfit = function (params) {
  if (params.length <= 1) { return 0 }
  if (params.length == 2 && params[0] - params[1] <= 0) {
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
  console.log(minIndex, minVal);
  // 如果最小值是最后 返回0
  if (minIndex == params.length) { return 0 };
  for (let index = minIndex; index < params.length; index++) {
    console.log(params[index]);

  }

}

myMaxProfit(prices);

/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function (prices) {

};
