/* global alert prompt document */

function isPrime(num) {
  if (num % 2 === 0 && num !== 2) {
    return false;
  }

  for (let j = 3; j <= Math.ceil(Math.sqrt(num)); j += 1) {
    if (num % j === 0) {
      return false;
    }
  }

  return true;
}

function checkFactors(factor) {
  const primes = [];
  
  // We're using the square root of the number (rounded up) to reduce the number of values to check, which
  // speeds up the runtime of the function significantly. This is based on the Sieve of Eratosthenes algorithm.
  for (let i = 2; i <= Math.ceil(Math.sqrt(factor)); i++) {
    while (factor % i !== 0 && i <= Math.ceil(Math.sqrt(factor))) {
      i++;
    }

    if (i >= Math.ceil(Math.sqrt(factor))) {
      break;
    }
    
    // We're starting from the bottom up, so if factor / i is prime, then, logically, factor / i is the
    // greatest prime factor.
    if (isPrime(factor / i)) {
      return factor / i;
    }
    
    // Otherwise, we push i into the primes array and continue.
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  
  // Sort primes into descending order by value.
  primes.sort((a, b) => (b - a));
  
  // If primes has at least one value, then the first value is the greatest prime factor.
  // Otherwise, the limit given itself is prime!
  return primes.length > 0 ? primes[0] : factor;
}

function largestPrime(limit) {
  document.getElementById('prob3result').innerHTML = checkFactors(limit);
}
