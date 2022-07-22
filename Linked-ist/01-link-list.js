/** 
 * 题目：删除链表中的节点
 * 题意：
 * 条件：数据保证需要删除的节点 不是末尾节点 。
 *   1、链表中节点的数目范围是 [2, 1000]
 *   2、-1000 <= Node.val <= 1000
 *   3、链表中每个节点的值都是 唯一 的
 *   4、需要删除的节点 node 是 链表中的节点 ，且 不是末尾节点
*/

console.log('************* me start ****************')
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */ 
const deleteNodeMy = (node) =>{  // 官方给出的答案，没有看明白
  node.val = node.next.val;
  node.next = node.next.next;
};
console.log('************* me end ******************')
