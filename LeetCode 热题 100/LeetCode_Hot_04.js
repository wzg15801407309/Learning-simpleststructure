/**  LeetCode 热题 100 */
/** 第四题
 * 题目：给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 题意：把所有的0移到末尾，非0元素排列顺序不变
 * 提示：必须在不复制数组的情况下原地对数组进行操作
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let moveZeroes = (nums) => {
  // 解法一 取巧
  // nums.sort((a,b) => b? 0: -1)
  // 双指针 
  let slowIndex = 0;
  for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
    if (nums[fastIndex] !== 0) {
      [nums[slowIndex], nums[fastIndex]] = [nums[fastIndex], nums[slowIndex]];
      slowIndex++;
    }
  }

};