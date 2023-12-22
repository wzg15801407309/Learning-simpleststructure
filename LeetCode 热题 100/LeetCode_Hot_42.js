/**  LeetCode 热题 100 */
/** 第42题
 * 题目：验证二叉搜索树
 * 题解：有效 二叉搜索树定义如下：
    节点的左子树只包含 小于 当前节点的数。
    节点的右子树只包含 大于 当前节点的数。
    所有左子树和右子树自身必须也是二叉搜索树。
 * 方案名称：递归
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let isValidBST = (root) => {

  const helper = (root, lower, upper) => {
    if (root == null) {
      return true;
    }
    if (root.val <= lower || root.val >= upper) {
      return false;
    }
    return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
  }

  return helper(root, -Infinity, Infinity);

};