/* global prompt alert document */

function fibo(limit) {
  let term1 = 1;
  let term2 = 2;
  let tempTerm = 0;
  let result = 0;

  while (term2 < limit) {
    if (term2 % 2 === 0) {
      result += term2;
    }

    tempTerm = term1 + term2;
    term1 = term2;
    term2 = tempTerm;
  }

  document.getElementById('prob2result').innerHTML = result;
}
