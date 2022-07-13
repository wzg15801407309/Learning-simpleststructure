/** 
 * 题目：验证回文串
 * 题意：就是验证左右的反转字符串后等于本身  abba 
 */

console.log('************* me start ****************')
console.log('因为本身不知道什么是会文串所以直接看了题解');
console.log('************* me end ******************')

const a = 'A man, a plan, a canal: Panama';
const c = 'baab5'
console.log('************* normal start ****************')
/**
 * @param {string} s
 * @return {boolean}
 */
const  isPalindrome_01 = s =>{
  if(s.length<=1) return true;
  s = s.replace(/[\W|_]/g, "").toLowerCase();
  const len = s.length;
  for (let i = 0; i < s.length; i++) {
    if (s[i]!== s[len-1-i]) {
      return false;
    }
  }
  return true;
};
console.log(isPalindrome_01(a));
console.log(isPalindrome_01(c));
console.log('************* normal end ******************')