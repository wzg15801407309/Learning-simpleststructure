
/** 
 * 动态规划
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，
 * 影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 * 
 * 我的理解：就是球数组的索引的单双的和 
 * 结果：这中理解是错误的
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
let nums = [2, 7, 9, 3, 1]
var myRob = function (nums) {
  let len = nums.length;
  if (len == 1) return nums[0]
  if (len == 2) return Math.max(nums[0], nums[1]);
  let singelNum = 0;
  let doubleNum = 0;
  for (let i = 0; i < len; i++) {
    i % 2 == 0 ? doubleNum += nums[i] : singelNum += nums[i]
  }
  return Math.max(singelNum, doubleNum);

};
// console.log(myRob(nums));


/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let len = nums.length;
  if (len == 1) return nums[0]
  if (len == 2) return Math.max(nums[0], nums[1]);
  const dp = new Array(len + 1);
  // dp 中存放的是偷i个房间的最大哦金额
  dp[0] = 0;
  dp[1] = nums[0];
  for (let i = 2; i <= len; i++) {
    // 第i间房可以选择 偷或者是不偷  
    // 选择偷： 当前房间的最大利润 就是 当前房间的金额+（i-2）前个房间的最大金额   === dp[i] = nums[i]+dp[i-2]
    // 选择不偷：dp[i] = dp[i-1]的最大金额
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
  }
  return dp[len]
};
console.log(rob(nums));
