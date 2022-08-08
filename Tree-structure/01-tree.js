/** 
 * 树结构的学习
 * 一、树的问题可以由 广度优先搜索 或 深度优先搜索 解决
 * 二、下面的题目基本 对于练习 广度优先遍历
 * 三、二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 题目：给定一个二叉树，找出其最大深度
 * 
 */

console.log('************* me start ****************')
console.log('************* me end ******************')


console.log('************* normal start ****************')
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root)=>{
  // 递归 深度优先
  // return root==null? 0 : Math.max(maxDepth(root.left), maxDepth(root.right))+1;
  //BFS的实现原理就是一层层遍历，统计一下总共有多少层，我们来画个图分析一下。
  if(root == null) return 0;
  let queue = [];
  queue.push(root);
  let count = 0;
  while(queue.length){
    let len = queue.length;
    while(len--){
      let node = queue.shift(); // 删除第一个  返回删除的数据
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    count++;
  }
  return count;
};
console.log('************* normal end ******************')