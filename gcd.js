// calculate gcd

const gcd_calculate = (num1, num2) => {
  // additional check for NaN values.
  if (num2 === 0) return num1;
  if (num1 % num2 === 0) {
    return num2;
  }

  return gcd_calculate(num2, num1 % num2);
};

console.log(gcd_calculate(12, 5));
console.log(gcd_calculate(20, 15));
console.log(gcd_calculate(60, 24));
console.log(gcd_calculate(10, 0));
