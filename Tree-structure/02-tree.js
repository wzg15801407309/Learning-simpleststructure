/** 
 * 树结构的学习
 * 一、树的问题可以由 广度优先搜索 或 深度优先搜索 解决
 * 二、下面的题目基本 对于练习 广度优先遍历
 * 三、二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 
 * 题目：验证二叉搜索树
 * 有效 二叉搜索树定义如下：
        1、节点的左子树只包含 小于 当前节点的数。
        2、节点的右子树只包含 大于 当前节点的数。
        3、所有左子树和右子树自身必须也是二叉搜索树。
 */




console.log('************* start ****************')
// 方法一  递归
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 辅助函数
const helper = (root, lower, upper) => {
  if (root === null) {
      return true;
  }
  if (root.val <= lower || root.val >= upper) {
      return false;
  }
  return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
}
const isValidBST = (root)=> {
  return helper(root, -Infinity, Infinity);
};

// 方法二  中序遍历
const isValidBST_center = (root)=> {
  let stack = [];
  let inorder = -Infinity;
  while(stack.length || root !== null){
    while(root !==null){
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if(root.val <= inorder){
      return false;
    }
    inorder = root.val;
    root = root.right;
  }
  return true;
};

console.log('************* end ******************')