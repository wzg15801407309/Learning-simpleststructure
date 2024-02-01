/**  LeetCode 热题 100 */
/** 第63题
 * 题目：杨辉三角
 * 题解：给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
 * 方案名称：数学
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
let generate = (numRows) => {
  let res = [];
  for (let i = 0; i < numRows; i++) {
    const currArr = new Array(i + 1).fill(1);
    for (let j = 1; j < currArr.length - 1; j++) {
      currArr[j] = res[i - 1][j - 1] + res[i - 1][j]
    }
    res.push(currArr);
  }
  return res;
};