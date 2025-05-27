// node /Users/samuellove/Documents/GitHub/IOD/Module4Lab/Lab8Ext.mjs

import moment from "moment";
import "moment-timezone";

console.log(`
========================
Question 1
========================
`);

// Calculate the number of days between your birthdate and the current date

const birthDate = moment("1996-09-15");
const now = moment();
const daysBetween = now.diff(birthDate, "days");
console.log(`Days since birth: ${daysBetween}`);

console.log(`
========================
Question 2
========================
`);

// Display the number of years, months, and days between your birthdate and current date

const ageYears = now.diff(birthDate, "years");
const afterYears = birthDate.clone().add(ageYears, "years");

const ageMonths = now.diff(afterYears, "months");
const afterMonths = afterYears.clone().add(ageMonths, "months");

const ageDays = now.diff(afterMonths, "days");

console.log(
  `Current age: ${ageYears} years, ${ageMonths} months, and ${ageDays} days`,
);

console.log(`
========================
Question 3
========================
`);

// Given two dates, display the date closest to the current date

const date1 = moment("2024-12-25");
const date2 = moment("2025-01-01");

const diff1 = Math.abs(now.diff(date1));
const diff2 = Math.abs(now.diff(date2));

const closest = diff1 < diff2 ? date1 : date2;
console.log(`Closest date to now: ${closest.format("YYYY-MM-DD")}`);

console.log(`
========================
Question 4
========================
`);

// Given two dates, display whether the first date is before or after the second date

if (date1.isBefore(date2)) {
  console.log(
    `${date1.format("YYYY-MM-DD")} is before ${date2.format("YYYY-MM-DD")}`,
  );
} else if (date1.isAfter(date2)) {
  console.log(
    `${date1.format("YYYY-MM-DD")} is after ${date2.format("YYYY-MM-DD")}`,
  );
} else {
  console.log("The dates are the same.");
}

console.log(`
========================
Question 5
========================
`);

// Display the current time in London

const londonTime = moment().tz("Europe/London");
console.log(`Current time in London: ${londonTime.format("HH:mm:ss")}`);
