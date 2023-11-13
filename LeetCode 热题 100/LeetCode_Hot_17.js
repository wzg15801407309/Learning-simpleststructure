/**  LeetCode 热题 100 */
/** 第17题
 * 题目：【缺失的第一个正数】
 * 题意：给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
 * 条件：请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
 * 结果：不是很懂
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
let firstMissingPositive = (nums) => {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    while (nums[i] > 0 && nums[i] <= len && nums[nums[i] - 1] != nums[i]) {
      const temp = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = temp;
    }

  }
  for (let i = 0; i < nums.length; i++) {//循环交换位置之后的数组，判断第一个缺失的正数
    if (nums[i] != i + 1) {
      return i + 1;
    }
  }
  // [1,2,3]
  return nums.length + 1;
};