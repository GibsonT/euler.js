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

  for (let i = 2; i <= Math.ceil(Math.sqrt(factor)); i++) {
    while (factor % i !== 0 && i <= Math.ceil(Math.sqrt(factor))) {
      i++;
    }

    if (i >= Math.ceil(Math.sqrt(factor))) {
      break;
    }

    console.log(`Checking ${i} and ${factor / i}`);
    if (isPrime(factor / i)) {
      return factor / i;
    }
    if (isPrime(i)) {
      console.log(`Push ${i}`);
      primes.push(i);
    }
  }
  primes.sort((a, b) => (b - a));
  return primes.length > 0 ? primes[0] : factor;
}

function largestPrime(limit) {
  document.getElementById('prob3result').innerHTML = checkFactors(limit);
}
