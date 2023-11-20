/**  LeetCode 热题 100 */
/** 第21题
 * 题目： 写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。
 * 要求：该矩阵具有以下特性:每行的元素从左到右升序排列 每列的元素从上到下升序排列。
 * 方案名称：搜索二维矩阵 II
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
let searchMatrix = function (matrix, target) {
  if (!matrix || matrix.length == 0 || matrix[0].length == 0) return false;
  let col = 0;
  let row = matrix[0].length - 1;
  while (col < matrix.length && row >= 0) {
    if (matrix[col][row] > target) {
      row--;
    } else if (matrix[col][row] < target) {
      col++;
    } else {
      return true;
    }
  }
  return false;
};