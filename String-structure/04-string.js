/** 
 * 题目：给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 题意：给定一个正缺的单词，在给另一个单词，判断是否是正确单词的错误写法（字母错位）
 */
const s = "anagram", t = "nagaram";
const s1 = "anagramm", t1 = "nagaram";
console.log('************* me start ****************')
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const  myIsAnagram = (s, t)=> {
  if(s.length<1 || s.length != t.length) return false;
  const leftmap= new Map();
  const rightmap = new Map();
  for (const value of Array.from(s)) {
    if(leftmap.has(value)){
      const val = leftmap.get(value)+1;
      leftmap.set(value,val);
    }else{
      leftmap.set(value,1);
    }
  }
  for (const value of Array.from(t)) {
    if(rightmap.has(value)){
      const val = rightmap.get(value)+1;
      rightmap.set(value,val);
    }else{
      rightmap.set(value,1);
    }
  }
  for (const [value,key] of leftmap) {
    if(rightmap.get(value) !=key){
      return false
    }
  }
  return true;
};
console.log(myIsAnagram(s,t));
console.log(myIsAnagram(s1,t1));
console.log('************* me end ******************')


console.log('************* normal start ****************')
// 排序 这种方法感觉很巧妙
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 知道：join('') 方法是把数组转换为字符串
 */
 const isAnagram_01 = (s, t)=> {
  return  s.length == t.length && [...s].sort().join('') === [...t].sort().join('')
 }
 console.log(isAnagram_01(s1,t1));
// 哈希表
const isAnagram_02= (s, t)=> {
  if (s.length !== t.length) {
    return false;
  }
  const table = new Array(26).fill(0);//代表26个字母
  for (let i = 0; i < s.length; ++i) {
    table[s.codePointAt(i) - 'a'.codePointAt(0)]++; // 根据ASCII码排序
  }
  for (let i = 0; i < t.length; ++i) {
    table[t.codePointAt(i) - 'a'.codePointAt(0)]--;
    if (table[t.codePointAt(i) - 'a'.codePointAt(0)] < 0) {
        return false;
    }
  }
  return true;
}
console.log(isAnagram_02(s,t));

console.log('************* normal end ******************')