/* global alert prompt */

function largestPrime(limit) {
  let prime = 0;
  let foundPrime = false;

  // We're starting at the sqrt to massively cut down on possibilities
  for (let i = Math.ceil(Math.sqrt(limit)); i > 1; i--) {
    while (limit % i !== 0) {
      i--;
    }

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        break;
      } else if (j === i - 1) {
        foundPrime = true;
        prime = i;
        break;
      }
    }

    if (foundPrime) {
      break;
    }
  }

  // Never found a prime previously? Then the limit is the prime!
  return foundPrime ? prime : limit;
}
