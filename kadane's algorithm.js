/* 
    Kadane's Algorithm is an iterative dynamic programming algorithm.
    Kadane's Algorithm is used to find the continuous subarray in the One-Dimensional integer array, which has the largest sum possible.
*/

const kadaneAlgo = (arr) => {
  let maxSum = Number.MIN_VALUE;
  let curSum = 0;
  let maxNegValue = Number.MIN_SAFE_INTEGER;
  let allNegValue = true;
  for (let i = 0; i < arr.length; i++) {
    // neg values check
    if (arr[i] >= 0) {
      allNegValue = false;
    }

    if (arr[i] < 0 && allNegValue && arr[i] > maxNegValue) {
      maxNegValue = arr[i];
    }

    // kadane's algo
    curSum += arr[i];
    if (curSum > maxSum) {
      maxSum = curSum;
    }

    if (curSum < 0) {
      curSum = 0;
    }
  }

  return allNegValue ? maxNegValue : maxSum;
};

const arr = [-2, -3, 4, -1, -2, 1, 5, -3, 4];
console.log("Max sum : ", kadaneAlgo(arr));
