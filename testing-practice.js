const capitalize = (str) => {
  const capitalStr = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalStr;
};

const reverseString = (str) => {
  const reverseStr = str.split('').reverse().join('');
  return reverseStr;
};

const calculator = () => {
  let calculator = {
    add: function (a, b) {
      return a + b;
    },
    subtract: function (a, b) {
      return a - b;
    },
    divide: function (a, b) {
      return a / b;
    },
    multiply: function (a, b) {
      return a * b;
    },
  };
  return calculator;
};

const caesarCipher = (str, shift) => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
    } else {
      result += str.charAt(i);
    }
  }
  return result;
};

const analyzeArray = (arr) => {
  let object = {
    average: arr.reduce((a, b) => a + b, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
  return object;
};

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
