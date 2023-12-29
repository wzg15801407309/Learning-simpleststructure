/**  LeetCode 热题 100 */
/** 第46题
 * 题目：从前序与中序遍历序列构造二叉树
 * 题解：给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。
 * 方案名称：xxxx
 * 明白：1:前序遍历的特点： 根左右  因此：前序遍历的数组的第一个一定是根节点
 *      2:中序遍历的特点： 左根右  因此：左右子树可以确定
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
let buildTree = (preorder, inorder) => {
  const map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  const hel = (p_start, p_end, i_start, i_end) => {
    if (p_start > p_end) return null;
    let rootVal = preorder[p_start];
    let root = new TreeNode(rootVal);
    let mid = map.get(rootVal);
    let leftNum = mid - i_start;
    root.left = hel(p_start + 1, p_start + leftNum, i_start, mid - 1);
    root.right = hel(p_start + leftNum + 1, p_end, mid + 1, i_end);
    return root;
  }
  return hel(0, preorder.length - 1, 0, inorder.length - 1);
};