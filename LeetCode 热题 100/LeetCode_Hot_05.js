/**  LeetCode 热题 100 */
/** 第5题
 * 题目：盛最多水的容器
 * 题意：给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 提示：无
 */
/**
 * @param {number[]} height
 * @return {number}
 */
let maxArea = (height) => {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  while (left < right) {
    const currentArea = (right - left) * Math.min(height[left], height[right]);
    maxArea = Math.max(maxArea, currentArea);
    if (height[left] < height[right]) {
      left++
    } else {
      right--;
    }
  }
  return maxArea
};