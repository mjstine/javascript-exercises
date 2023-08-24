/**
 * FUNCTION convertToCelsius(tempInFaren):
 *   SET convertedTemp to (tempInFaren - 32) divided by 1.8
 *   RETURN rounded value of convertedTemp to one decimal place
 * 
 * FUNCTION convertToFahrenheit(tempInCel):
 *   SET convertedTemp to (tempInCel multiplied by 1.8) plus 32
 *   RETURN rounded value of convertedTemp to one decimal place
 */

const convertToCelsius = function (tempInFaren) {
  let convertedTemp = (tempInFaren - 32) / 1.8;
  return Math.round(convertedTemp * 10) / 10;
};

const convertToFahrenheit = function (tempInCel) {
  let convertedTemp =  (tempInCel * 1.8 ) + 32;
  return Math.round(convertedTemp * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
