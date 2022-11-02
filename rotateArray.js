let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const rotateBy = 2;

/* 
    Using temp Array method 
    Time complexity: O(n)
    Space Complexity: O(n)
*/
// let temp = [];
// for (let i = 0; i < arr.length; i++) {
//   if (i < rotateBy) {
//     temp.push(arr[i]);
//   } else {
//     arr.splice(0, rotateBy);
//     break;
//   }
// }
// console.log("Rotated Array: ", arr.concat(temp));

/*
    Rotate one by one method
    Time complexity: O(n * d)
    Space complexity: O(1)
*/
// let rotateNumber = 0;
// while (rotateNumber < rotateBy) {
//   let firstValue = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     arr[i - 1] = arr[i];
//   }
//   arr[arr.length - 1] = firstValue;
//   rotateNumber++;
// }
// console.log(arr);

/*
    using juggling memthod
    Time Complexity: O(n)
    Space Complexity: O(1)
*/
// for (let i = 0; i < rotateBy; i++) {
//   const temp = arr[i];
//   let currentIdx = i;

//   for (let j = i + rotateBy; 1; j += rotateBy) {
//     if (j >= arr.length) {
//       j = j - arr.length;
//     }

//     if (j == i) break;
//     arr[currentIdx] = arr[j];
//     currentIdx = j;
//   }

//   arr[currentIdx] = temp;
// }
// console.log(arr);

/*
  Reversal algorithm
  https://www.geeksforgeeks.org/program-for-array-rotation-continued-reversal-algorithm/
  Space complexity: O(n)
  Time Complexity: O(1)
*/
// const reverseArr = (arr, start, end) => {
//   while (start < end) {
//     const temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     start++;
//     end--;
//   }
// };

// const rotateNum = rotateBy % arr.length;
// reverseArr(arr, 0, rotateNum - 1);
// reverseArr(arr, rotateNum, arr.length - 1);
// reverseArr(arr, 0, arr.length - 1);
// console.log(arr);

/*
  Cyclic rotation of array
  Time complexity: O(n)
  space complexity: O(1)
*/
let incFactor = 1;
const rotateArray = (arr, inc) => {
  const rightMostValue = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    arr[i + 1] = arr[i];
  }
  arr[0] = rightMostValue;
  console.log("Rotated ", inc, ": ", arr);
  if (inc > arr.length - 1) return;
  return rotateArray(arr, ++inc);
};

rotateArray(arr, incFactor);
