

function lonelyinteger(a) {
    // Write your code here
  let unique = 0;
  for (let i = 0; i < a.length; i++) {
    unique ^= a[i];
  }
  return unique;
}

lonelyinteger([1,2,3,4,3,2,1,])

