/**  LeetCode 热题 100 */
/** 第53题
 * 题目：搜索二维矩阵
 * 题解：给你一个满足下述两条属性的 m x n 整数矩阵：1；每行中的整数从左到右按非严格递增顺序排列。2:每行的第一个整数大于前一行的最后一个整数。
 *      给你一个整数 target ，如果 target 在矩阵中，返回 true ；否则，返回 false 。
 * 方案名称：xxxx
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
let searchMatrix = (matrix, target) => {
  const binarySearchFirstColumn = (matrix, target) => {
    let low = -1;
    let high = matrix.length - 1;
    while (low < high) {
      const mid = Math.floor((high - row + 1) / 2) + low;
      if (matrix[mid][0] <= target) {
        low = mid;
      } else {
        high = mid - 1;
      }
    }
    return low;
  }
  const binarySearchRow = (row, target) => {
    let low = 0, high = row.length - 1;
    while (low <= high) {
      const mid = Math.floor((high - low) / 2) + low;
      if (row[mid] == target) {
        return true;
      } else if (row[mid] > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return false;
  }
  const rowIndex = binarySearchFirstColumn(matrix, target);
  if (rowIndex < 0) {
    return false
  }
  return binarySearchFirstColumn(matrix[rowIndex], target);
};