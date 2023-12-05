/**  LeetCode 热题 100 */
/** 第31题
 * 题目： K 个一组翻转链表
 * 要求：给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。
 * 1:k 是一个正整数
 * 2:它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 * 方案名称：xxxxxxx
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const { reverse } = require("core-js/core/array");

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
let reverseKGroup = (head, k) => {
  if (head == null || head.next == null) return head;
  let start = head, end = head;
  for (let i = 0; i < k; i++) {
    // 如果在还没遍历到第 k 个，end 空了，即 head 链表个数不满足 k 个，直接返回原链表
    if (!end) {
      return head;
    } else {
      end = end.next;
    }
  }
  let newHead = reverse(start, end);

};
// 反转区间 [a, b) 的元素，注意是左闭右开
function reverse(head, end) {
  let p = head, q, newHead; // p 在前面，q 跟在 p 的后面
  while (p !== end) {
    q = p; // q 赋值会原链表 p 的位置
    p = p.next; // p 继续向后遍历
    q.next = newHead;
    newHead = q;
  }
  return newHead;
};
