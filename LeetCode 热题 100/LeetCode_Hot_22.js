/**  LeetCode 热题 100 */
/** 第22题
 * 题目：相交链表
 * 要求：给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。
 * 方案名称：双指针（最优） 可以将空间复杂度降至 O(1)O(1)O(1)。
 */
/**
 * Definition for singly-linked list. 定一个链表
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  // 哈希集合
  // const visited = new Set();
  // let temp = headA;
  // while (temp !== null) {
  //   visited.add(temp);
  //   temp = temp.next;
  // }
  // temp = headB;
  // while (temp != null) {
  //   if (visited.has(temp)) {
  //     return temp;
  //   }
  //   temp = temp.next;
  // }
  // return null;
  // 双指针
  if (!headA || !headB) {
    return null;
  }
  let pA = headA;
  let pB = headB;
  while (pA != pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return pA;

};