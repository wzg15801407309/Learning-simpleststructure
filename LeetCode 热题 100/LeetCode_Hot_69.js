/**  LeetCode 热题 100 */
/** 第69题
 * 题目：单词搜索
 * 题解：给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。
 * 解析：单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 * 方案名称：xxxx
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
  const m = board.length;
  const n = board[0].length;
  // 二维矩阵 存放bool值
  const used = new Array(m);
  for (let i = 0; i < m; i++) {
    used[i] = new Array(n);
  }
  /**
   *  canFind 判断当前点是否是目标路径上的点
   * @param {*} row 当前点的坐标
   * @param {*} col 当前点的坐标
   * @param {*} i 当前考察的word的饭字符索引
   */
  const canFind = (row, col, i) => {
    // 递归的出口 已找到字符串
    if (i == word.length) {
      return true;
    }
    // 当前点越界 
    if (row < 0 || row >= m || col < 0 || col >= n) {
      return false;
    }
    // 当前点已经访问过 或飞目标点
    if (used[row][col] || board[row][col] != word[i]) {
      return false;
    }
    // 排除所有的false点 当前点暂时没有毛病 可以继续递归
    used[row][col] = true;
    // canFindRest 基于当前的点【row，col】能否找到剩余的字符路径
    const canFindRest = canFind(row + 1, col, i + 1) || canFind(row - 1, col, i + 1) || canFind(row, col + 1, i + 1) || canFind(row, col - 1, i + 1);
    if (canFindRest) {
      return true;
    }
    used[row][col] = false;
    return false
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == word[0] && canFind(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};