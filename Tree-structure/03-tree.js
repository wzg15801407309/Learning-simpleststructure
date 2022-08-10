/** 
 * 树结构的学习
 * 一、树的问题可以由 广度优先搜索 或 深度优先搜索 解决
 * 二、下面的题目基本 对于练习 广度优先遍历
 * 三、二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 
 * 题目：对称二叉树
 * 题意：给你一个二叉树的根节点 root ， 检查它是否轴对称
 */


console.log('************* start ****************')
// 递归实现
// 递归方法
const isSymmetricHelper = (left,right)=>{
  if(left == null && right == null) return true;
  if(left == null || right == null || left.val !=right.val) return false;

  return isSymmetricHelper(left.left,right.right) && isSymmetricHelper(left.right,right.left);
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const isSymmetric = (root)=>{
  // 不明白的是为啥为null 还是对称的
  if (root == null) return true;
  //从两个子节点开始判断
  return isSymmetricHelper(root.left, root.right);
};


// 迭代(BFS)
const isSymmetric_01 = (root)=>{
  if (root == null) return true;
  let queue = [];
  //从两个子节点开始判断
  queue.push(root.left,root.right);
  while(queue.length){
    let t1 = queue.shift();
    let t2 = queue.shift();
    // 如果都是null 的话继续后面的循环
    if(!t1 && !t2) continue; 
    // 如果有一方为null 就不是对称树了
    if(!t1 || !t2 ) return false;
    // 左右的值不相等
    if(t1.val != t2.val) return false;
    // 满足条件 个人觉得这里的push顺序是有讲究的
    queue.push(t1.left,t2.right,t1.right,t2.left);
  }
  return true;
};

console.log('************* end ******************')