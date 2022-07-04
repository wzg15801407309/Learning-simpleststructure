/** 
 * 题目：旋转图像。
 * 规则：给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像"顺时针旋转 90 度"。你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像
 * 题意：n == matrix.length == matrix[i].length  1 <= n <= 20 -1000 <= matrix[i][j] <= 1000,旋转的角度是非常重要的
 * 题解：行 变成列  最后的放在最前面
*/
const matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
const matrixO = [[1,2,3],[4,5,6],[7,8,9]];
                         
console.log('************* me start ****************')
const rotateMy = (matrix) => {
  return '我自己没有做出来！！'
};
console.log(rotateMy(matrix));
// console.log(rotateMy(matrixO));
console.log('************* me end ******************')



console.log('************* normal start ****************')
// 方法一： 使用辅助数组实现（不复合题意 不使用额外的数组）
const rotateRecursionTemp = (matrix) => {
  const len = matrix.length;
  const matrixNew = new Array(len).fill(0).map(()=> new Array(len).fill(0));
  for (let i = 0; i <len; i++) {
    for (let j = 0; j < len; j++) {
      matrixNew[j][len-i-1] = matrix[i][j];
    }
  }
  return matrixNew;
}
console.log(rotateRecursionTemp(matrixO));
console.log(rotateRecursionTemp(matrix));
// 方法二 原地旋转 符合题意 自己没又怎么想明白的方法
const rotateRecursion = (matrix) => {
  const len = matrix.length;
  for (let i = 0; i <Math.floor(len/2); i++) {
    for (let j = 0; j < Math.floor((len + 1) / 2); j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[len-j-1][i];
      matrix[len-j-1][i] = matrix[len-i-1][len-j-1];
      matrix[len-i-1][len-j-1] = matrix[j][len-i-1];
      matrix[j][len-i-1] = temp;
    }
  }
  return matrix;
  
}
console.log('000000',rotateRecursion(matrix));
console.log('000000',rotateRecursion(matrixO));
// 方法三，用翻转代替旋转

var rotate = function(matrix) {
  const n = matrix.length;
  // 水平翻转
  for (let i = 0; i < Math.floor(n / 2); i++) {
      for (let j = 0; j < n; j++) {
          [matrix[i][j], matrix[n - i - 1][j]] = [matrix[n - i - 1][j], matrix[i][j]];
      }
  }
  // 主对角线翻转
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < i; j++) {
          [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
  }
};

console.log('************* normal end ******************')