/**  LeetCode 热题 100 */
/** 第15题
 * 题目： 轮转数组
 * 题意：给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
 * 提示：xxxxxxx
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let rotate = (nums, k) => {
  // // 神仙解法
  // k = k % nums.length
  // nums.splice(0, 0, ...nums.splice(-k))
  // 广大网友解法】
  let times = k % nums.length;
  while (times) {
    nums.unshift(nums.pop());
    times--
  }
};