/**
 * FUNCTION sumAll(num1, num2):
 *   IF num1 is less than 0 OR num2 is less than 0 OR num1 is not a number OR num2 is not a number:
 *     RETURN "ERROR"
 * 
 *   SET min to num1 if num1 is less than num2, otherwise set min to num2
 *   SET max to num1 if num1 is greater than num2, otherwise set max to num2
 *   SET sum to 0
 * 
 *   FOR i from min to max:
 *     ADD i to sum
 * 
 *   RETURN sum
 */

const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof num1 !== "number" || typeof num2 !== "number") {
        return "ERROR";
    }

    let min = num1 < num2 ? num1 : num2;
    let max = num1 > num2? num1 : num2;
    let sum = 0;

    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
