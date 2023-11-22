/**  LeetCode 热题 100 */
/** 第23题
 * 反转链表
 * 要求：给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 * 方案名称:递归
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
let reverseList = (head) => {
  // // 迭代
  // let prev = null;
  // let curr = head;
  // while (curr) {
  //   const next = curr.next;
  //   curr.next = prev;
  //   prev = curr;
  //   curr = next;
  // }
  // return prev;


  // 递归
  if (head === null || head.next == null) return head;
  const newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};