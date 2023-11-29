/**  LeetCode 热题 100 */
/** 第28题
 * 题目：两数相加
 * 要求：给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * 方案名称：xxxxxxx
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const { add } = require("nodemon/lib/rules");

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = (l1, l2) => {
  let addOne = 0;
  let sum = new ListNode("0");
  let head = sum;
  while (addOne || l1 || l2) {
    let val_1 = l1 != null ? l1.val : 0;
    let val_2 = l2 != null ? l2.val : 0;
    let r1 = val_1 + val_2 + addOne;
    addOne = r1 >= 10 ? 1 : 0;
    sum.next = new ListNode(r1 % 10);
    sum = sum.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return head.next;
};