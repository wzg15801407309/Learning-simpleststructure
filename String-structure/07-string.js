/** 
 * 题目：给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。
 */
console.log('************* me start ****************')

const haystack = "hello";
const needle = "ll";
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var myStrStr = function(haystack, needle) {
  if(!needle) return -1;
  const strlen = needle.length;
  for (let i = 0; i < haystack.length-strlen+1; i++) {
    if(haystack.slice(i,strlen+i) == needle){
      return i
    }
  }
  return -1;
};
console.log(myStrStr(haystack,needle));
console.log('************* me end ******************')


console.log('************* normal start ****************')

console.log('************* normal end ******************')
