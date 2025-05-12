// node /Users/samuellove/Documents/GitHub/IOD/Module3/numbers.js

console.log(`
========================
Decimal
========================
`);

const billion1 = 1000000000; // 9 zeros - hard to read
const billion2 = 1_000_000_000; // easier to read, underscores ignored
const billion3 = 1e9; // exponential format

console.log(billion1 === billion2); // true
console.log(billion2 === billion3); // true

const microSecs1 = 0.000001; // 6 decimal places - hard to read
const microSecs2 = 0.000_001; // easier to read, underscores ignored
const microSecs3 = 1e-6; // exponential format

console.log(microSecs1 === microSecs2); // true
console.log(microSecs2 === microSecs3); // true

console.log(`
========================
Hexadecimal
========================
`);

const r = 0xff;
const g = 0xff;
const b = 0xff;

const white = `rgb(${r}, ${g}, ${b})`;
console.log(white); // rgb(255, 255, 255)

console.log(`
========================
Binary & Octal
========================
`);

const mobile = 041234567;
console.log(mobile); // 8730999 - decimal equivalent

const binary = 0b11111111; // binary form of 255
const octal = 0o377; // octal form of 255

console.log(binary); // 255
console.log(binary === octal); // true

console.log(`
========================
Base conversion
========================
`);

const ff = 255;
const ee = 238;
const dd = 221;

console.log(ff.toString(16)); // ff

// Convert from RGB colour code to hexadecimal
console.log(`#${ff.toString(16)}${ee.toString(16)}${dd.toString(16)}`); // #ffeedd

console.log(`
========================
Imprecise calculations
========================
`);

const toobig = 1e350; // 1 * 10^350 - overflows storage

console.log(toobig); // Infinity
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

const point1 = 0.1;
const point2 = 0.2;
console.log(`${point1} + ${point2} = ${point1 + point2}`); // 0.1 + 0.2 = 0.30000000000000004

// Numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers.
console.log(9_999_999_999_999_999); // 16 digits, prints as 10000000000000000
console.log(Number.MAX_SAFE_INTEGER); // 9_007_199_254_740_991

console.log(`
========================
Tests: isFinite and isNaN
========================
`);

console.log(isNaN(NaN)); // true
console.log(NaN == NaN); // false

console.log(isFinite(1 / 3)); // true, regular number
console.log(isFinite("string")); // false, because converts to NaN
console.log(isFinite(Infinity)); // false, because represents infinite number

console.log(`
========================
parseInt and parseFloat
========================
`);

console.log(+"100px"); // NaN - 100px is not a valid number

console.log(parseInt("150px")); // 150 - stops at 'px'
console.log(parseFloat("2.5em")); // 2.5 - stops at 'em'
console.log(parseFloat("12.34.56")); // 12.34 - stops at second invalid decimal
console.log(parseInt("a123")); // NaN - can't parse the 'a' so stops
