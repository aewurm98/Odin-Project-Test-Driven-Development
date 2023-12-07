const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require('./testing-practice');

it('capitalize', () => {
  expect(capitalize('hello')).toBe('Hello');
});

it('reverseString', () => {
  expect(reverseString('hello')).toBe('olleh');
});

it('calculator', () => {
  expect(calculator().add(2, 2)).toBe(4);
  expect(calculator().subtract(2, 2)).toBe(0);
  expect(calculator().divide(2, 2)).toBe(1);
  expect(calculator().multiply(2, 2)).toBe(4);
});

it('caesarCipherLowercase', () => {
  expect(caesarCipher('hello', 1)).toBe('ifmmp');
});

it('caesarCipherUppercase', () => {
  expect(caesarCipher('HELLO', 1)).toBe('IFMMP');
});

it('caesarCipherNonAlphabet', () => {
  expect(caesarCipher('Hello!', 1)).toBe('Ifmmp!');
});

it('analyzeArray', () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).average).toBe(3);
  expect(analyzeArray([1, 2, 3, 4, 5]).min).toBe(1);
  expect(analyzeArray([1, 2, 3, 4, 5]).max).toBe(5);
  expect(analyzeArray([1, 2, 3, 4, 5]).length).toBe(5);
});
