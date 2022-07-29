/** 
 * 题目：给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * 条件：链表中结点的数目为 sz
        1 <= sz <= 30
        0 <= Node.val <= 100
        1 <= n <= sz
*/

console.log('************* start ****************')
/** 快慢指针
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 const  removeNthFromEnd = (head, n)=>{
  let fast = head;
  let slow = head;
  while(n--) fast = fast.next;
  if(fast == null) return head.next;
   while(fast.next){
       fast = fast.next;
       slow = slow.next;
   }
   slow.next = slow.next.next
   return head;
};
console.log('************* end ******************')
