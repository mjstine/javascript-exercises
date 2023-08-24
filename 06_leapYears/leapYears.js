/**
 * FUNCTION leapYears(year):
 *   IF year is divisible by 4 AND year is not divisible by 100:
 *     RETURN true
 * 
 *   IF year is divisible by 400 AND year is divisible by 100:
 *     RETURN true
 * 
 *   RETURN false
 */

const leapYears = function(year) {
    if (year % 4 === 0 && year % 100 !== 0) return true; 
    if (year % 400 === 0 && year % 100 === 0) return true;
    return false;
};

// Do not edit below this line
module.exports = leapYears;
