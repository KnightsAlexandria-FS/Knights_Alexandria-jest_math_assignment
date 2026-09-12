const { add, subtract, multiply, divide, sqrt, max } = require('./math');

describe('Basic Math Operations', () => {
  test('should correctly add two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('should correctly subtract two numbers', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('should correctly multiply two numbers', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test('should correctly divide two numbers', () => {
    expect(divide(20, 5)).toBe(4);
  });
});

describe('Advanced Math Operations', () => {
  test('should return the square root of a number', () => {
    expect(sqrt(16)).toBe(4);
  });

  test('should return the maximum of two numbers', () => {
    expect(max(7, 12)).toBe(12);
  });
});