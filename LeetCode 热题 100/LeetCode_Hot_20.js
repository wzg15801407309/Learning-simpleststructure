/**  LeetCode 热题 100 */
/** 第20题
 * 题目：给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
 * 要求：你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
 * 方案名称：旋转图像
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
let rotate = (matrix) => {
  const n = matrix.length;
  for (let i = 0; i < Math.floor(n / 2); ++i) {
    for (let j = 0; j < Math.floor((n + 1) / 2); ++j) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[n - j - 1][i];
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
      matrix[j][n - i - 1] = temp;
    }
  }
  // 翻转
  // const n = matrix.length;
  // // 水平翻转
  // for (let i = 0; i < Math.floor(n / 2); i++) {
  //   for (let j = 0; j < n; j++) {
  //     [matrix[i][j], matrix[n - i - 1][j]] = [matrix[n - i - 1][j], matrix[i][j]];
  //   }
  // }
  // // 主对角线翻转
  // for (let i = 0; i < n; i++) {
  //   for (let j = 0; j < i; j++) {
  //     [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
  //   }
  // }


};