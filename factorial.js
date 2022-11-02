const num = 6;

// iterative approach
// Time complexity = O(n)
let fact = 1;
for (let i = num; i > 0; i--) {
  fact *= i;
}
console.log(fact);

// recurssion
// Time complexity = O(n)
const factorialCalculator = (number) => {
  if (number <= 0) return 1;

  return number * factorialCalculator(number - 1);
};
console.log(factorialCalculator(num));
