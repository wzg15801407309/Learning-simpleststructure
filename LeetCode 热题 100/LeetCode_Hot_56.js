/**  LeetCode 热题 100 */
/** 第56题
 * 题目：寻找旋转排序数组中的最小值
 * 题解：你一个元素值 互不相同 的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素 。
 * 方案名称：二分查找
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
let findMin = (nums) => {
  let left = 0, right = nums.length - 1
  while (left < right) {
    const pivot = left + Math.floor((right - left) / 2);
    if (nums[pivot] < nums[right]) {
      right = pivot;
    } else {
      left = pivot;
    }
  }
  return nums[left];
};