/**  LeetCode 热题 100 */
/** 第73题
 * 题目：柱状图中最大的矩形
 * 题解：给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。求在该柱状图中，能够勾勒出来的矩形的最大面积。
 * 方案名称：单调栈
 */
/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = (heights) => {
  const stack = [];
  let maxArea = 0;
  heights = [0, ...heights, 0];
  for (let i = 0; i < heights.length; i++) {
    // 当前bar比栈顶 bar 矮
    while (heights[stack[stack.length - 1]] > heights[i]) {
      maxArea = Math.max(maxArea, heights[stack.pop()] * (i - stack[stack.length - 1] - 1));
    }
    // 当bar 比栈顶高了 入栈
    stack.push(i);
  }
  return maxArea;

};