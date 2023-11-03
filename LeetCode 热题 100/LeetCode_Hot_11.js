/**  LeetCode 热题 100 */
/** 第11题
 * 题目：给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。回 滑动窗口中的最大值 。
 * 提示：xxxxxxx
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
let maxSlidingWindow = (nums, k) => {
  const queue = [], result = [];
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    while (queue.length > 0 && nums[i] > nums[queue[queue.length - 1]]) {
      queue.pop();
    }
    queue.push(i);
    const j = i - k + 1;
    if (j >= 0) {
      if (queue[0] < j) queue.shift();
      result.push(nums[queue[0]]);
    }
  }
  return result
};