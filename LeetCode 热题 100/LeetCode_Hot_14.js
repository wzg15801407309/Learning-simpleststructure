/**  LeetCode 热题 100 */
/** 第14题
 * 题目：区间合并
 * 题意：以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 */

const { Array } = require("core-js");

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
let merge = function (intervals) {
  // 排序
  let res = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let prev = intervals[0];
  for (let i = 0; i < intervals.length; i++) {
    const cur = intervals[i];
    if (prev[1] >= cur[0]) { //有重合
      prev[1] = Math.max(prev[1], cur[1]);
    } else {
      res.push(prev);
      prev = cur;
    }
  }
  res.push(prev);
  return res;
};
