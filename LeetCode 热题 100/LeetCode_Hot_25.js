/**  LeetCode 热题 100 */
/** 第25题
 * 题目：环形链表
 * 要求：给你一个链表的头节点 head ，判断链表中是否有环。、
 * 题目解读：如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况
 * 方案名称：快慢指针
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const { textChangeRangeIsUnchanged } = require("typescript");

/**
 * @param {ListNode} head
 * @return {boolean}
 */
let hasCycle = (head) => {
  // 非官方的解法 主要是利用了JSON.stringify()方法在对象出现循环引用的时候会报错
  // try {
  //   JSON.stringify(head)
  // } catch {
  //   return true
  // }
  // return false
  // 解法二
  // let map = new Map();
  // while (head) {
  //   if (map.has(head)) return head;
  //   map.set(head, true);
  //   head = head.next;
  // }
  // return false;
  // 解法三 快慢指针
  /** 设置快慢指针 */
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      return true;
    }
  }
  return false;
};