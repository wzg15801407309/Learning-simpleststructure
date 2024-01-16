/**  LeetCode 热题 100 */
/** 第54题
 * 题目：在排序数组中查找元素的第一个和最后一个位置
 * 题解：给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
 *      如果数组中不存在目标值 target，返回 [-1, -1]。
 * 方案名称：二分查找
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  var left = 0;
  var right = nums.length - 1;
  var first = -1;
  var last = -1;

  // 找第一个等于 target 的位置
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (nums[mid] === target) {
      right = mid - 1;
      first = mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  // 找最后一个等于 target 的位置
  left = 0;
  right = nums.length - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (nums[mid] === target) {
      left = mid + 1;
      last = mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return [first, last];
};