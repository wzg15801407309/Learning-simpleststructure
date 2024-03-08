/**  LeetCode 热题 100 */
/** 第76题
 * 题目：前 K 个高频元素
 * 题解：给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
 * 方案名称：map 后排序
 */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  // map 后排序
  const map = new Map();
  nums.forEach(n => {
    map.set(n, map.has(n) ? map.get(n) + 1 : 1);
  });
  // 将map 转为 Array 
  const list = Array.from(map).sort((a, b) => b[1] - a[1]);
  // 取元素
  return list.slice(0, k).map(n => n[0])
};