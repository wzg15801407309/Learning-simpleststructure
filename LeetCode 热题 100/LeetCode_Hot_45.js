/**  LeetCode 热题 100 */
/** 第45题
 * 题目：二叉树展开为链表
 * 题解：展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。展开后的单链表应该与二叉树 先序遍历 顺序相同。
 * 方案名称：递归+前序遍历
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = root => {
  // 递归+前序遍历
  const list = [];
  const preorderTraversal = (root, list) => {
    if (root != null) {
      list.push(root);
      preorderTraversal(root.left, list);
      preorderTraversal(root.right, list);
    }
  };
  preorderTraversal(root, list);
  const len = list.length;
  for (let i = 1; i < len; i++) {
    const prev = list[i - 1];
    const curr = list[i];
    prev.left = null;
    prev.right = curr;
  }
  return list
};