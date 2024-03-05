/**  LeetCode 热题 100 */
/** 第75题
 * 题目：只出现一次的数据
 * 题解：给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 方案名称：异或运算
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  let ans = 0;
  for (const num of nums) {
    ans ^= num;
  }
  return ans;
};