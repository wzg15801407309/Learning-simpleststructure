/** 
 * 题目：回文链表 （对称和数组的一样）
*/

const { nextTick } = require("process");

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
