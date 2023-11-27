/**  LeetCode 热题 100 */
/** 第25题
 * 题目：环形链表2
 * 要求：给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 * 题目解读：如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
 * 方案名称：快慢指针
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


/**
 * @param {ListNode} head
 * @return {boolean}
 */
let detectCycle = (head) => {

  /** 设置快慢指针 */
  // let slow = head;
  // let fast = head;
  // while (fast && fast.next) {
  //   slow = slow.next;
  //   fast = fast.next.next;
  //   if (slow == fast) {
  //     return true;
  //   }
  // }
  // return false;

  // 快慢指针 2
  if (head === null) {
    return null;
  }
  let slow = head, fast = head;
  while (fast !== null) {
    slow = slow.next;
    if (fast.next != null) {
      fast = fast.next.next;
    } else {
      return null;
    }

    if (fast == slow) {
      let ptr = head;
      while (ptr != slow) {
        ptr = ptr.next;
        slow = slow.next;
      }
      return ptr
    }
  }
  return null;

};