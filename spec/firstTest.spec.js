const opposite = require('../codewars/opposite.js');
const positiveSum = require('../codewars/positiveSum.js');
const removeChar = require('../codewars/removeChar.js');
const repeatStr = require('../codewars/repeatStr.js');

describe('Return return', () =>{

test('PositiveSum return', () => {
  expect(positiveSum([1,2,3,4,5])).toBe(15);
  expect(positiveSum([1,-2,3,4,5])).toBe(13);
  expect(positiveSum([])).toBe(0);
  expect(positiveSum([-1,-2,-3,-4,-5])).toBe(0);
  expect(positiveSum([-1,2,3,4,-5])).toBe(9)
  expect(positiveSum([-1,2,3,4,-5])).toBeDefined();
});

test('Find its opposite', () => {
  expect(opposite(-1)).toBe(1)
})

test('First and last characters of a string', () =>{
  expect(removeChar('eloquent')).toBe('loquen')
  expect(removeChar('country')).toBeDefined();
});

test('Repeats the given string', () =>{
  expect(repeatStr(3, 'I')).toHaveLength(3)
  expect(repeatStr(3, 'I')).toBe('III')
  expect(repeatStr(5, "#")).toHaveLength(5)
  expect(repeatStr(5, "#")).toBe('#####')
})
})
