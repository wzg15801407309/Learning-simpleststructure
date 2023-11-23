/**  LeetCode 热题 100 */
/** 第24题
 * 题目：回文链表（对称链表）
 * 要求：给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
 * 方案名称：将值复制到数组中后用双指针法
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
 * @return {boolean}
 */
let isPalindrome = (head) => {
  let arr = [];
  // 把链表的数据保存到数组中去
  while (head !== null) {
    arr.push(head.val);
    head = head.nex
  }
  // 使用双指针 
  for (let i = 0, j = arr.length - 1; i < j; ++i, --j) {
    if (arr[i] != arr[j]) {
      return false;
    }
  }
  return true;
};