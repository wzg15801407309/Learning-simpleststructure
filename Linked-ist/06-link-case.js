/**
 * 题目：给定一个单链表  使用原地算法 让奇数节点放在一起 偶数节点放在一起
 */
class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next
  }
}

console.log('************* 案例的实现 ****************')
/**
 * @param {ListNode} node
 * @return {void} 
 */
const addEvenList = (head) => {
  if (head == null) return null;
  // 奇数链表开始
  let odd = head;
  // 偶数链表的开始
  let enve = head.next;
  // 保存偶数链表
  let enveHead = enve;
  while (enve != null && enve.next != null) {
    odd.next = enve.next;
    odd = odd.next;
    enve.next = odd.next;
  }
  odd.next = enveHead;
  return head
};
console.log('************* 案例的实现 结束 ******************')
console.log('************* 调用 ******************')
// 创建一个单链表
const len = 10; // 链表的值的个数
let listArr = [];
let head = new ListNode(Math.floor(Math.random() * 100) + 1, null)
listArr.push(head);
for (let i = 1; i < len; i++) {
  let value = Math.floor(Math.random() * 100) + 1;
  let node = new ListNode(value, null);
  listArr.push(node);
  listArr[i - 1].next = node;
}
console.log(listArr);
console.log(addEvenList(head));


