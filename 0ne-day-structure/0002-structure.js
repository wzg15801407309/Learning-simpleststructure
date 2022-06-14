/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  const len = nums.length;
  if(len === 0) {return 0;};
  let first = 1,next = 1;
  while(first < len){
      if(nums[first] !== nums[first-1]){
          nums[next] = nums[first];
          ++next;
      }
      ++first;
  }
  return nums.slice(0,next);
};

const array = [1,1,2,2,3,4,4,5,5,6,6,7,8,8,9,9];
console.log(removeDuplicates(array));