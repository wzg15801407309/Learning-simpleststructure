/**  LeetCode 热题 100 */
/** 第53题
 * 题目：搜索插入位置
 * 题解：给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 要求：请必须使用时间复杂度为 O(log n) 的算法。
 * 方案名称：二分查找
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  let ans = n;
  while (left <= right) {
    let mid = ((right - left) >> 1) + left;
    if (target <= nums[mid]) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
};
