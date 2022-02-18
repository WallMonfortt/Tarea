

// Pseudocode to solve this exercise: check if the number is prime or not
// 1. Create a function that receives a number as parameter
// 2. Create a variable called isPrime and set it to true
// 3. Create a for loop that iterates from 2 to the number minus 1
// 4. Check if the number is divisible by the current iteration
// 5. If it is, set isPrime to false and break the loop
// 6. Return isPrime


function isPrime(number) {
  let start = performance.now();
  let steps = 0;
    if (number < 2) return false + " "+"steps:" + (steps + 1 )+ " " + (performance.now() - start);
    if (Math.sqrt(number) % 1 === 0) return false + " "+"steps:" + (steps + 1 )+ " " + (performance.now() - start);
    for (var i = 2; i < number; i++) {
      steps++;
        if (number % i === 0) return false + " "+"steps:" + (steps )+ " " + (performance.now() - start);
    }
    return true+ " "+"steps:" + (steps )+ " " + (performance.now() - start);
}

// O(n) time complexity

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(300));
console.log(isPrime(17));
console.log(isPrime(18));