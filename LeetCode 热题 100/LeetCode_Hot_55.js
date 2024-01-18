/**  LeetCode 热题 100 */
/** 第55题
 * 题目：搜索旋转排序数组
 * 题解：给旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。
 *      你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。
 * 方案名称：二分查找
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let search = (nums, target) => {
  if (!nums.length) return -1;
  // 找中间值 mid
  let len = nums.length;
  let left = 0, right = len - 1, mid;
  while (left <= right) {
    mid = left + ((right - left) >> 1);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] >= nums[left]) {// 说明左边是升序
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;

};