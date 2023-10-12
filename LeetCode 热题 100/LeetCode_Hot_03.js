/**  LeetCode 热题 100 */
/** 第三题
 * 题目：最长连续序列 （给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。）
 * 题意：连续的序列   我的理解就是：连续的数字
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
let longestConsecutive = (nums) => {
  let maxCount = 0;
  //数据去重和创建一个map格式的数据 set函数的特性
  nums = new Set(nums);
  for (let value of nums) {
    // 从最小的开始查找
    // 从没有比自己小1的数开始查找连续序列
    // 这样可以单向处理
    // 给定的值在nums数据中有没有
    if (nums.has(value - 1)) continue;
    let curr = value;
    while (nums.has(curr + 1)) {
      nums.delete(curr + 1);
      curr++;
    }
    maxCount = Math.max(maxCount, curr - value + 1);
  }
  return maxCount;

};