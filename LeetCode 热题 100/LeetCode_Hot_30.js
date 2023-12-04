/**  LeetCode 热题 100 */
/** 第30题
 * 题目：两两交换链表中的节点
 * 要求：给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
 * 方案名称：递归（不好理解）
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (head == null || head.next == null) return head
  // 递归
  const newHead = head.next;
  head.next = swapPairs(newHead.next);
  newHead.next = head;
  return newHead;
  // 迭代
  // let dummy = new ListNode(0, head); // 用哨兵节点简化代码逻辑
  //   let node0 = dummy;
  //   let node1 = head;
  //   while (node1 && node1.next) { // 至少有两个节点
  //       let node2 = node1.next;
  //       let node3 = node2.next;

  //       node0.next = node2; // 0 -> 2
  //       node2.next = node1; // 2 -> 1
  //       node1.next = node3; // 1 -> 3

  //       node0 = node1; // 下一轮交换，0 是 1
  //       node1 = node3; // 下一轮交换，1 是 3
  //   }
  //   return dummy.next; // 返回新链表的头节点

};