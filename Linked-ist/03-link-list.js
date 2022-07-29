/** 
 * 题目：给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 * 条件：
        链表中节点的数目范围是 [0, 5000]
        -5000 <= Node.val <= 5000
*/

console.log('************* start ****************')
/** 快慢指针
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 const  reverseList = (head)=>{
    let prev = null;
    let curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};
console.log('************* end ******************')
