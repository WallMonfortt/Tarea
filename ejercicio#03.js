function primeList(n) { // O(n)
  const p = [];
// Implementacion de la Criba de Eratóstenes
  function isPrime(n) { // O(n)
    for(let i = 2,raiz=Math.sqrt(n); i <= raiz; i++) // O(Math.sqrt(n))
    if(n % i === 0) return false; // O(1)
    return n > 1; // O(1)
  }

  for (let index = 0; index < n; index++) { // O(n)
  if (isPrime(index)) p.push(index); // O(1)
  }
  return p;  // O(1)
}

console.log(primeList(8));
console.log(primeList(80));
console.log(primeList(100));
console.log(primeList(1000));

// O(n) time complexity