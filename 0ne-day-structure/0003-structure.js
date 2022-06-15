/**
 * 判断数据中有没有重复值，有返回：true，美誉返回：false
 * @param {nums[]} nums 
 */
/**方法一
 * 思路：先给数据排序，这样相同的数据就会在相邻的位置上。
 */ 
const containsDuplicate = nums=>{
  nums.sort();
  for (let i = 0; i < nums.length-1; i++) {
    if(nums[i] == nums[i+1]){
      return true;
    }
  }
  return false;
};
console.log(containsDuplicate([0,9,8,7,6,1])); 