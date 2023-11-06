/**  LeetCode 热题 100 */
/** 第13题
 * 题目：最大子数组和
 * 题意：给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 提示：子数组 是数组中的一个连续部分。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let pre = 0;
  let maxAas = nums[0];
  nums.forEach(value => {
    pre = Math.max(pre + value, value);
    maxAas = Math.max(maxAas, pre);
  });
  return maxAas
};