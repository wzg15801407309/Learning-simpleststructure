/**  LeetCode 热题 100 */
/** 第18题
 * 题目：螺旋矩阵
 * 要求：给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 * 方案名称：按层模拟
 */

const { Array } = require("core-js");

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
let spiralOrder = (matrix) => {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }
  const rows = matrix.length;
  const columns = matrix[0].length;
  const order = [];
  let left = 0;
  let top = 0;
  let right = columns - 1;
  let bottom = rows - 1;
  while (left <= right && top <= bottom) {
    for (let column = left; column <= right; column++) {
      order.push(matrix[top][column]);
    }
    for (let row = top + 1; row <= bottom; row++) {
      order.push(matrix[row][right]);
    }
    if (left < right && top < bottom) {
      for (let column = right - 1; column > left; column--) {
        order.push(matrix[bottom][column]);
      }
      for (let row = bottom; row > top; row--) {
        order.push(matrix[row][left]);
      }
    }
    // 缩小矩阵
    [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
  }
  return order;
};