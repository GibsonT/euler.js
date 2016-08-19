/* global prompt alert */

const limit = prompt('Find the sum of multiples of 3 and 5 below what limit?');
let total = 0;

for (let i = 1; i < limit; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    total += i;
  }
}

alert(`The sum is ${total}`);
