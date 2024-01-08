/**  LeetCode 热题 100 */
/** 第50题
 * 题目：岛屿数量
 * 题解：给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * 方案名称：递归 + 沉没 一类题型的套路
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
let numIslands = (grid) => {
  let count = 0;
  const sink = (row, col) => {
    // row 越界
    if (row < 0 || row >= grid.length) return;
    // col 越界
    if (col < 0 || col >= grid[0].length) return;
    // 当前的节点是0 就不用在沉默了
    if (grid[row][col] === "0") return;

    grid[row][col] = "0";
    sink(row - 1, col);
    sink(row + 1, col);
    sink(row, col - 1);
    sink(row, col + 1);
  }
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] == "1") {
        count += 1;
        sink(row, col);
      }
    }
  }
  return count;
};