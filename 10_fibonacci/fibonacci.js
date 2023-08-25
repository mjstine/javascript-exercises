/**
 * FUNCTION fibonacci(n):
 *   IF n is less than 0:
 *     RETURN "OOPS"
 *   
 *   IF n is 0:
 *     RETURN 0
 * 
 *   IF n is 1:
 *     RETURN 1
 * 
 *   SET previous to 0
 *   SET current to 1
 *   FOR i from 2 to n:
 *     SET next to previous + current
 *     SET previous to current
 *     SET current to next
 * 
 *   RETURN current
 * END FUNCTION
 */

const fibonacci = function (n) {
  if (n < 0) return "OOPS";
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev = 0;
  let current = 1;
  for (let i = 2; i <= n; i++) {
    let next = prev + current;
    prev = current;
    current = next;
  }
  return current;
};

// Do not edit below this line
module.exports = fibonacci;
