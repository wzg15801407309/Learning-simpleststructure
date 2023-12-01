/**  LeetCode 热题 100 */
/** 第29题
 * 题目：删除链表的倒数第 N 个结点
 * 要求：给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * 方案名称：快慢指针
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
 * @param {number} n
 * @return {ListNode}
 */
let removeNthFromEnd = function (head, n) {
  let slow = head;
  let fast = head;
  while (n--) {
    fast = fast.next;
  }
  // n 和 链表 中总的个数相同 即要删除链表的表头节点（不理解）
  if (!fast) {
    return head.next;
  }
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next
  return head;
};