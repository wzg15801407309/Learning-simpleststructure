/**  LeetCode 热题 100 */
/** 第33题
 * 题目：排序链表
 * 题解：给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 * 方案名称：自顶向下归并排序 没有怎么看明白
 */

const merge = (head1, head2) => {
  const dummyHead = new ListNode(0);
  let temp = dummyHead, temp1 = head1, temp2 = head2;
  while (temp1 !== null && temp2 !== null) {
    // 把交换位置
    if (temp1.val <= temp2.val) {
      temp.next = temp1;
      temp1 = temp1.next;
    } else {
      temp.next = temp2;
      temp2 = temp2.next;
    }
    temp = temp.next;
  }
  if (temp1 !== null) {
    temp.next = temp1;
  } else if (temp2 !== null) {
    temp.next = temp2;
  }
  return dummyHead.next;
}

const toSortList = (head, tail) => {
  if (head === null) {
    return head;
  }
  if (head.next === tail) {
    head.next = null;
    return head;
  }
  // 这一步是为了把 链表分成2段
  let slow = head, fast = head;
  while (fast !== tail) {
    slow = slow.next;
    fast = fast.next;
    if (fast !== tail) {
      fast = fast.next;
    }
  }
  const mid = slow;
  return merge(toSortList(head, mid), toSortList(mid, tail));
}


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const sortList = (head) => {
  return toSortList(head, null);
};
