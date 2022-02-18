
// Trata de resolverlo con una solución más eficiente.
function isPrime(n) { // O(n)
  for(let i = 2,raiz=Math.sqrt(n); i <= raiz; i++) // O(Math.sqrt(n))
  if(n % i === 0) return false; // O(1)
  return true; // O(1)
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(300));
console.log(isPrime(17));
console.log(isPrime(15));
console.log(isPrime(7));
console.log(isPrime(999));
console.log(isPrime(189));

// O(n) time complexity
