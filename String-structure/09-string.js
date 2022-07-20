/** 
 * 题目：编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 ""。
 * 条件：1 <= strs.length <= 200
 *      0 <= strs[i].length <= 200
 *      strs[i] 仅由小写英文字母组成     
 */
console.log('************* me start ****************')
const arr = ["bfolower","oflow","cflight"];
const arr1 = ["folower","florw","flightr"];
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefixMy = (strs)=> {
    let re = '';
    if (!strs.length) return re;
    for (var j=0;j<strs[0].length;j++){//第j位
        for (var i=1;i<strs.length;i++){//第i个
            if (strs[i][j]!=strs[0][j]) return re
        }
        re += strs[0][j];
    }
    return re;
};
// console.log(longestCommonPrefixMy(arr));
console.log(longestCommonPrefixMy(arr1),"未实现");
console.log(longestCommonPrefixMy(arr));
console.log('************* me end ******************')

console.log('************* normal start ****************')

console.log('************* normal end ******************')
