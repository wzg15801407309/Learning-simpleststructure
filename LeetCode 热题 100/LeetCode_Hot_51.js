/**  LeetCode 热题 100 */
/** 第51题
 * 题目：腐烂的橘子
 * 题解：在给定的 m x n 网格 grid 中，每个单元格可以有以下三个值之一： 值 0 代表空单元格； 值 1 代表新鲜橘子；值 2 代表腐烂的橘子。
 *      每分钟，腐烂的橘子 周围 4 个方向上相邻 的新鲜橘子都会腐烂。返回 直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1 。
 * 方案名称：xxxx
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
let orangesRotting = (grid) => {
  let minutes = 0;
  let fresh = 0;
  let queue = [];

  let len_r = grid.length;
  let len_c = grid[0].length;
  //遍历一遍 m*n
  for (let r = 0; r < len_r; r++) {
    for (let c = 0; c < len_c; c++) {
      //新鲜加1
      if (grid[r][c] == 1) fresh++;
      //腐烂的入队列
      if (grid[r][c] == 2) queue.push([r, c]);
    }
  }
  // 没腐烂 或 没新鲜
  while (queue.length != 0 && fresh) {
    //四联通
    let dR = [0, -1, 0, 1];
    let dC = [-1, 0, 1, 0];
    let next = [];
    // bfs
    while (queue.length != 0) {
      let current = queue.pop();
      //上下左右扫一遍
      for (let i = 0; i < dR.length; i++) {
        let nR = current[0] + dR[i];
        let nC = current[1] + dC[i];
        // 边界
        if (nR >= 0 && nC >= 0 && nR < len_r && nC < len_c) {
          //变腐烂且入队列,新鲜减1
          if (grid[nR][nC] == 1) {
            grid[nR][nC] = 2;
            next.push([nR, nC]);
            fresh--;
          }
        }
      }
    }
    minutes++;
    //下一层
    queue = next;
  }

  return fresh == 0 ? minutes : -1;
};