const { isGeneratorFunction } = require("util/types");

/** 
 * 题目：回文链表 （对称和数组的一样）
*/
console.log('************* start ****************')
// 利用数组来做 后面还可以使用 递归查找和快慢指针
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = (head)=>{
    if(!head) return false;
    // 把链表的值放在数组中
    const array = [];
    while(head!=null){
        array.push(head.val);
        head = head.next;
    }
    for (let i = 0,j = array.length-1; i <j; i++,j--) {
        if(array[i] !== array[j]){
            return false;
        }
    }
    return true;
};
console.log('************* end ******************')

/** 
 * 题目：给你一个链表的头节点 head ，判断链表中是否有环。
 * 题意：如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。
 * 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。
 * 如果链表中存在环 ，则返回 true 。 否则，返回 false 。
*/



console.log('************* start ****************')
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head)=> {
    if(head == null || head.next == null || head.next.next == null){ return false} 
    let n1 = head;
    let nn = head.next;
    while(n1 != nn){
        if(nn.next== null || nn.next.next==null){
            return false;
        }
        n1 = n1.next;
        nn = nn.next.next
    }

    return true;

};
console.log('************* end ******************')





