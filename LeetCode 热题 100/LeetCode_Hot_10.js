/**  LeetCode 热题 100 */
/** 第十题
 * 题目：和为 K 的子数组
 * 题意：给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。
 * 提示：子数组是数组中元素的连续非空序列。
 */

const { forEach } = require("core-js/core/array");
const { escapeLeadingUnderscores } = require("typescript");

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let subarraySum = (nums, k) => {
  let len = nums.length;
  let count = 0;
  /** 不行1 */
  // let tempK = k;
  // for (let i = 0; i < len; i++) {
  //   tempK = tempK - nums[i];
  //   tempK == 0 ? count++ : tempK = k;
  // }
  /** 不行1  end*/

  /**题解1 暴力解法 */
  // 问题1 为什么要用++变量
  // for (let start = 0; start < len; ++start) {
  //   let sum = 0;
  //   for (let end = start; end >= 0; --end) {
  //     sum += nums[end];
  //     if (sum == k) {
  //       count++
  //     }
  //   }
  // }
  // return count;
  /**题解1 暴力解法 end*/
  /**题解2 前缀和+哈希表优化 */
  const map = new Map();
  map.set(0, 1);
  let pre = 0;
  for (const numitem of nums) {
    pre += numitem;
    if (map.has(pre - k)) {
      count += map.get(pre - k);
    }
    if (map.has(pre)) {
      map.set(pre, map.get(pre) + 1);
    } else {
      map.set(pre, 1);
    }
  }
  return count;

  /**题解2 前缀和+哈希表优化 end */



};