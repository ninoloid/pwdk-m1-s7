// Create a function to find a factorial number using recursion
// Example
// Input :  5
// Output: 5! = 5 x 4 x 3 x 2 x 1 = 120

// function yg manggil dirinya sendiri sampe disuruh berhenti

const factorialRecursion = (num) => {
  if (num <= 1) return 1;

  return num * factorialRecursion(num - 1);
};

console.log(factorialRecursion(5));
