// // factorial with recurssion
// const fact = (num) => {
//   if (num === 1) return 1;
//   return num * fact(--num);
// };
// console.log(fact(6));

// // fibonacci with recurssion
// const fibo = (num) => {
//   if (num === 0) return 0;
//   if (num === 1 || num === 2) return 1;

//   return fibo(num - 1) + fibo(num - 2);
// };

// const num = 5;
// for (let i = 0; i < num; i++) {
//   process.stdout.write(fibo(i) + " ");
// }

// // sum of n natural numbers using recurssion
// const sumOfNaturalnumber = (number) => {
//   if (number === 1) return 1;
//   return number + sumOfNaturalnumber(number - 1);
// };
// console.log(sumOfNaturalnumber(5));

// // Calculate pow(a,b)
// const powerOfNumber = (base, power) => {
//   if (power === 1) return base;
//   return base * powerOfNumber(base, power - 1);
// };
// console.log(powerOfNumber(3, 10));

// // matrix path calculator
// // rules: only bottom and right path are available
// const matrixPath = (rows, cols) => {
//   if (rows === 1 || cols === 1) return 1;
//   return matrixPath(rows - 1, cols) + matrixPath(rows, cols - 1);
// };
// console.log(matrixPath(2, 2));

// // palindrome of number
// const palindrome = (arr, firstIdx, lastIdx) => {
//   if (firstIdx >= lastIdx) {
//     return "Palindrome";
//   }

//   if (arr[firstIdx] !== arr[lastIdx]) {
//     return "Not Palindrome";
//   }

//   palindrome(arr, ++firstIdx, --lastIdx);
// };
// console.log(palindrome("aabbbaa", 0, 6));

// powerset calculator, or substring calculator
// const arr = [];
// const powerSet = (string, result, index) => {
//   if (index === string.length) {
//     arr.push(result);
//     console.log(result);
//     return;
//   }

//   powerSet(string, result + string[index], index + 1);
//   powerSet(string, result, index + 1);
// };
// powerSet("abc", "", 0);
// console.log(arr);

// find all combination of strings
// Also known as, permutation of given string
// const swapChar = (string, index1, index2) => {
//   if (string[index1] !== undefined && string[index2] !== undefined) {
//     const stringArr = string.split("");
//     const index1Char = stringArr[index1];
//     stringArr[index1] = stringArr[index2];
//     stringArr[index2] = index1Char;
//     return stringArr.join("");
//   }
// };

// const permute = (string, next, last) => {
//   if (next === last) {
//     console.log(string);
//     return;
//   }

//   for (let i = next; i <= last; i++) {
//     string = swapChar(string, next, i);
//     permute(string, next + 1, last);
//     string = swapChar(string, next, i);
//   }
// };

// const permuteString = "abcd";
// console.log(permute(permuteString, 0, permuteString.length - 1));
