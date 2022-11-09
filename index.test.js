const {
  stringLength,
  reverseString,
  Calculator,
  capitalize,
} = require('./index.js');

test('Gina to be length of 4', () => expect(stringLength('Gina')).toBe(4));

test('MoreThanWordCount to throw an error', () =>
  expect(stringLength('MoreThanWordCount')).toBe(
    'String must be less than 10 and greater than 1'
  ));

test('Gina reversed to be aniG', () =>
  expect(reverseString('Gina')).toBe('aniG'));

describe('simple Calculator add method', () => {
  test('expects 1 + 3 to equal 4', () => {
    expect(Calculator.add(1, 3)).toBe(4);
  });
  test('expects -1 + 4 to equal 3', () => {
    expect(Calculator.add(-1, 4)).toBe(3);
  });
  test('expects 0 + 0 to equal 0', () => {
    expect(Calculator.add(0, 0)).toBe(0);
  });
});

describe('simple Calculator subtract method', () => {
  test('expects 12 - 12 to equal 0', () => {
    expect(Calculator.subtract(12, 12)).toBe(0);
  });
  test('expects -1 - 4 to equal -5', () => {
    expect(Calculator.subtract(-1, 4)).toBe(-5);
  });
  test('expects 0 - 0 to equal 0', () => {
    expect(Calculator.subtract(0, 0)).toBe(0);
  });
});

describe('simple Calculator divide method', () => {
  test('expects 12 / 12 to equal 1', () => {
    expect(Calculator.divide(12, 12)).toBe(1);
  });
  test('expects -1 / -4 to equal 0.25', () => {
    expect(Calculator.divide(-1, -4)).toBe(0.25);
  });
  test('expects 0 / 0 to equal 0', () => {
    expect(Calculator.divide(0, 0)).toBeFalsy();
  });
});

describe('simple Calculator multiply method', () => {
  test('expects 12 * 12 to equal 144', () => {
    expect(Calculator.multiply(12, 12)).toBe(144);
  });
  test('expects -2 * -6 to equal 12', () => {
    expect(Calculator.multiply(-2, -6)).toBe(12);
  });
  test('expects 0 * 0 to equal 0', () => {
    expect(Calculator.multiply(0, 0)).toBe(0);
  });
});

test('first leter in city to be capitalized', () => {
  expect(capitalize('city')).toBe('City');
});
