/**  LeetCode 热题 100 */
/** 第二题
 * 题目：字母异位词分组
 * 题意：字母异位的分词指的是：单词的字母相同
 * 提示：仅包含小写字母
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
let groupAnagrams = function (strs) {
  // 暴力遍历发
  const mymap = new Map();
  for (let str of strs) {
    let strArr = Array.from(str).sort(); // 字符串转化为数组 并排序
    let key = strArr + ''// 数组转化为字符串
    let list = mymap.get(key) ? mymap.get(key) : new Array();
    list.push(str);
    mymap.set(key, list);
  }
  return Array.from(mymap.values());
};