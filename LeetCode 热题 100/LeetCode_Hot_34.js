/**  LeetCode 热题 100 */
/** 第34题
 * 题目：合并 K 个升序链表
 * 题解：请你将所有链表合并到一个升序链表中，返回合并后的链表。
 * 方案名称：最小堆 未看懂
 *  需要花时间慢慢看的题
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
let mergeKLists = (lists) => {
  //@datastructures-js/priority-queue   javascrpt 插件 堆
  // 实现功能是从数据结构中找到并移除最小节点。插入节点。
  let pq = new MinPriorityQueue({ priority: e => e.val });
  for (const head of lists)
    if (head) pq.enqueue(head);

  let dummy = new ListNode(); // 哨兵节点，作为合并后链表头节点的前一个节点
  let cur = dummy;
  while (!pq.isEmpty()) { // 循环直到堆为空
    const node = pq.dequeue().element; // 剩余节点中的最小节点
    if (node.next) // 下一个节点不为空
      pq.enqueue(node.next); // 下一个节点有可能是最小节点，入堆
    cur.next = node; // 合并到新链表中
    cur = cur.next; // 准备合并下一个节点
  }
  return dummy.next; // 哨兵节点的下一个节点就是新链表的头节点
};