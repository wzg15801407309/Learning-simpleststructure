/** 
 * 题目：两个数组的交集
 * 
 */
 const testArray1=[61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81]
 const testArray2= [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48];
 console.log('************* me start ****************')
 const intersectMy = (arr1,arr2)=>{
  const len1 = arr1.length;
  let temp =new Array() ;
  for (let i = 0; i < len1; i++) {
    if(arr2.indexOf(arr1[i])>-1){
      temp.push(arr1[i]);
    }
  }
  return temp;
}
const list = intersectMy(testArray1,testArray2);
console.log(list);
console.log('************* me end ******************')



console.log('************* normal start ****************')
// 双指针
const intersect = (nums1, nums2)=>{
  let i = 0;
  let j = 0;
  let list  = [];
  /** 特别注意这里的排序，直接使用sort()函数排序是错误的、 */ 
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  while(i<nums1.length && j<nums2.length){
    if(nums1[i]<nums2[j]){
      i++;
    }else if(nums1[i]>nums2[j]){
      j++;
    }else{
      list.push(nums1[i]);
      i++;
      j++;
    }
  }
  return list;
};

console.log(intersect(testArray1,testArray2));

// 哈希表
const intersectMap = (nums1, nums2)=>{
  // 使nums1是个数最长的数组
  if(nums1.length<nums2.length){
    [nums1,nums2] = [nums2,nums1]
  }
    const map = {};
    const res = [];
  // 先遍历长数组，记录各个数据出现的频次 也就是 nums1
  for (const num of nums1) {
    if(map[num]){
      map[num]++;
    }else{
      map[num] = 1;
    }
  }
  // 循环遍历短数组
  for (const num2 of nums2) {
    // 查看当前 num2中有没有，有就会有值
    const val = map[num2];
    if(val>0){
      res.push(num2);
      map[num2]--;
    }
  }
  return res;
};

console.log(intersectMap(testArray2,testArray1));
console.log('************* normal end ******************')