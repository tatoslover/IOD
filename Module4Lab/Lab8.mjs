// node /Users/samuellove/Documents/GitHub/IOD/Module4Lab/Lab8.mjs

import { DateTime, Interval } from "luxon";

console.log(`
========================
Question 1
========================
`);

// Calculate the number of days between your birthdate and the current date

const birthDate = DateTime.fromISO("1996-09-15");
const now = DateTime.now();

const daysBetween = now.diff(birthDate, "days").days;
console.log(`Days since birth: ${Math.floor(daysBetween)}`);

console.log(`
========================
Question 2
========================
`);

// Display the number of years, months, and days between your birthdate and current date

const diff = now.diff(birthDate, ["years", "months", "days"]).toObject();
console.log(
  `Current age: ${Math.floor(diff.years)} years, ${Math.floor(diff.months)} months, and ${Math.floor(diff.days)} days`,
);

console.log(`
========================
Question 3
========================
`);

// Given two dates, display the date closest to the current date

const date1 = DateTime.fromISO("2024-12-25");
const date2 = DateTime.fromISO("2025-01-01");

const diff1 = Math.abs(now.diff(date1).milliseconds);
const diff2 = Math.abs(now.diff(date2).milliseconds);

const closest = diff1 < diff2 ? date1 : date2;
console.log(`Closest date to now is: ${closest.toISODate()}`);

console.log(`
========================
Question 4
========================
`);

// Given two dates, display whether the first date is before or after the second date

if (date1 < date2) {
  console.log(`${date1.toISODate()} is before ${date2.toISODate()}`);
} else if (date1 > date2) {
  console.log(`${date1.toISODate()} is after ${date2.toISODate()}`);
} else {
  console.log("The dates are the same.");
}

console.log(`
========================
Question 5
========================
`);

// Display the current time in London

const londonTime = DateTime.now().setZone("Europe/London");
console.log(`Current time in London: ${londonTime.toFormat("HH:mm:ss")}`);
