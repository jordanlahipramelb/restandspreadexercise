// Spread With Function Calls...
const nums = [4, 5, 88, 123, 0.92, 34];
Math.max(nums); //NaN
Math.max(...nums); //123

///////////////////////////////////////////////////////////////////////////
const filterByType = (type, ...vals) => {
  return vals.filter((v) => typeof v === type);
};

const things = [23, 45, true, false, 0, 'hello', 'goodbye', undefined];

filterByType('number', ...things);

console.log(...'HELLO'); // H E L L O. String is spread out, iterates over the string
console.log('H', 'E', 'L', 'L', 'O'); // H E L L O
