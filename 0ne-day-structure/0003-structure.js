/**
 * 判断数据中有没有重复值，有返回：true，美誉返回：false
 * @param {nums[]} nums 
 */
/**方法一
 * 思路：先给数据排序，这样相同的数据就会在相邻的位置上。
 */ 
// const containsDuplicate = nums=>{
//   nums.sort();
//   for (let i = 0; i < nums.length-1; i++) {
//     if(nums[i] == nums[i+1]){
//       return true;
//     }
//   }
//   return false;
// };
// console.log(containsDuplicate([0,9,8,7,6,1])); 
/**
 * 方法二：利用哈希表
 * new set() 
 * 知道：Set（对象）是值的集合 Set 中的元素只会出现一次，即 Set 中的元素是唯一的。
 * 方法：add 添加值  has 返回一个布尔值，表示该值在 Set 中存在与否。
 */
 const containsDuplicate_01 = nums=>{
    const myset = new Set();
    for (const x of nums) {
      if (myset.has(x)) { return true;}
      myset.add(x);
    }
   return false;
};
console.log(containsDuplicate_01([1,2,1,2,3,4,5,6,7,8]));