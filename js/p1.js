/* global prompt alert document */

function multiples(limit) {
  let total = 0;
  for (let i = 1; i < limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }

  document.getElementById('prob1result').innerHTML = total;
}
