const add = function(addend1, addend2) {
	return addend1 + addend2;
};

const subtract = function(minuend, subtrahend) {
	return minuend - subtrahend;
};

const sum = function(arrInt) {
  let sum = 0;
  if (!arrInt.length) return sum;

  for (let i = 0; i < arrInt.length; i++) {
    sum += arrInt[i]
  }
  return sum;
	
};

const multiply = function(arrInt) {
  let result = 1;

  for (let i = 0; i < arrInt.length; i++) {
     result *= arrInt[i]
  }

  return result
};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(num) {
	if (num < 0) return null
  if( num === 0) return 1

  let factorial = 1
  for (let i = 1; i <= num; i++) {
    factorial *= i
  }

  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
