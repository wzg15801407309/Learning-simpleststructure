/**  LeetCode 热题 100 */
/** 第35题
 * 题目：二叉树的中序遍历
 * 题解：给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
 * 方案名称：递归（最简单）
 * 【 什么是二叉树的中序遍历？】：按照访问左子树——根节点——右子树的方式遍历这棵树，
 */
/**
 * 二叉树 算法 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let inorderTraversal = (root) => {
  const res = [];
  // 定义递归函数
  const inorder = (root) => {
    if (!root) return;
    inorder(root.left);
    res.push(root.val)
    inorder(root.right)
  }
  inorder(root);
  return res;


  // 迭代的方式  这个方式呢 利用了栈的特性 先入后出的特性
  // const res = [];
  // const stk = [];
  // while (root || stk.length) {
  //   while (root) {
  //     stk.push(root);
  //     root = root.left;
  //   }
  //   root = stk.pop();
  //   res.push(root.val);
  //   root = root.right;
  // }
  // return res;
};