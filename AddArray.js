// Your task is to create a function called addArrays, which takes two arrays consisting of integers, and returns the sum of those two arrays.

// The twist is that (for example) [3,2,9] does not equal 3 + 2 + 9, it would equal '3' + '2' + '9' converted to an integer, meaning it would equal 329. The output should be an array of the the sum in a similar fashion to the input (for example, if the sum is 341, you would return [3,4,1]). Examples are given below of what two arrays should return.
 
// [3,2,9],[1,2] --> [3,4,1]
// [4,7,3],[1,2,3] --> [5,9,6]
// [1],[5,7,6] --> [5,7,7]



//-------------------------------------solution -----------------

const addArrays = (arr, arr2) => {
  let total = Number(arr.join("")) + Number(arr2.join(""));
  let NumToStr = total.toString();
  let strToArr = NumToStr.split("");
  //converting each value to number
  let result = strToArr.map((value) => Number(value));
  return result;
};
console.log(addArrays([3, 2, 9], [1, 2]));



//----------------Above code can also be written as below one --------------------
const addArrays =(arr,arr2)=>{
  let total =( Number(arr.join(''))+Number(arr2.join(''))).toString().split('').map(i=>+i);
  return total;
}
console.log(addArrays([3,2,9],[1,2]));
