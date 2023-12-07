/**  LeetCode 热题 100 */
/** 第xxx题
 * 题目：题目
 * 题解：就相当于· 复制一个一模一样的链表 然后里面的random指针也要指向的一样（考你的最关键的就是这个
 * 方案名称：回溯 + 哈希表
 */

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
const copyRandomList = (head, cachedNode = new Map()) => {
  if (head === null) {
    return null;
  }
  if (!cachedNode.has(head)) {
    cachedNode.set(head, { val: head.val }), Object.assign(cachedNode.get(head), { next: copyRandomList(head.next, cachedNode), random: copyRandomList(head.random, cachedNode) })
  }
  return cachedNode.get(head);
}
