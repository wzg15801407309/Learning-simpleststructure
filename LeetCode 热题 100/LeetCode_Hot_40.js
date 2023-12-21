/**  LeetCode 热题 100 */
/** 第40题
 * 题目:给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
 * 题解:给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。
 * 方案名称：递归
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = (root) => {
  // // 方法一 深度优先+递归
  // let outArray = [];
  // dfs = (node, index) => {
  //   if (!node) return;
  //   // 如果当前层级未定义数组，则定义
  //   if (!outArray[index]) {
  //     outArray[index] = [];
  //   }
  //   outArray[index].push(node.val);
  //   dfs(node.left, index + 1);
  //   dfs(node.right, index + 1);
  // }
  // dfs(root, 0);
  // return outArray


  // 广度优先 + 队列 
  if (!root) return [];
  const queue = [];
  const out = [];
  queue.push(root);
  while (queue.length > 0) {
    let size = queue.length;
    out.push([]);
    while (size-- > 0) {
      const node = queue.shift();
      out[out.length - 1].push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return out;
};
