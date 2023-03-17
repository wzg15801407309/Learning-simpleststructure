
/** 
 * 动态规划
 * 题目：
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 *  子数组 是数组中的一个连续部分。
 * 
 * 理解：和负数相加值肯定会变小 
 */

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let myMaxSubArray = function (nums) {
  const len = nums.length;
  if (len <= 0) return;
  if (len == 1) return nums[0];
  let curr = nums[0];
  let maxNum = curr;
  for (let i = 1; i < len; i++) {
    // 当前的值和0比较  比0小取0，比0大取0本身 
    curr = Math.max(curr, 0) + nums[i];
    maxNum = Math.max(maxNum, curr);
  }
  return maxNum
}
console.log(myMaxSubArray(nums));