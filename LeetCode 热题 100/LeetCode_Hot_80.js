/**  LeetCode 热题 100 */
/** 第80题
 * 题目：寻找重复数
 * 题解：给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。
 * 条件：1:假设 nums 只有 一个重复的整数 ，返回 这个重复的数 。2:你设计的解决方案必须 不修改 数组 nums 且只用常量级 O(1) 的额外空间。
 * 方案名称：快慢指针
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = (nums) => {
  let slow = 0;
  let fast = 0;
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow != fast);
  slow = 0;
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};