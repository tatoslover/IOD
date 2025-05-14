// node /Users/samuellove/Documents/GitHub/IOD/Module3/date-time.js

console.log(`
========================
Creation
========================
`);

const now = new Date();
console.log(now); // 2025-05-13T23:05:26.491Z
console.log(+now); // 1747177526491 - number of milliseconds since epoch

const epoch = new Date(0); // 0 milliseconds since Jan 1 1970
const jan2_1970 = new Date(1000 * 60 * 60 * 24); // a full day in milliseconds after Jan 1
console.log(epoch); // 1970-01-01T00:00:00.000Z
console.log(jan2_1970); // 1970-01-02T00:00:00.000Z

const christmas2 = new Date("2023-12-25"); // assumes UTC timezone if time not included
console.log(christmas2); // 2023-12-25T00:00:00.000Z - Z indicates UTC timezone, GMT+0
const nyeLocal2 = new Date("2023-12-31 23:59:59"); // assumes local timezone if time is included
const nyeUTC = new Date("2023-12-31 23:59:59+00:00"); // specific timezone specified (UTC)
console.log(nyeLocal2); // 2023-12-31T13:59:59.000Z - stored internally as UTC so now hours are different
console.log(nyeUTC); // 2023-12-31T23:59:59.000Z - UTC before midnight, no longer local timezone

const boxingDay = new Date(2023, 11, 26); // month 11 is December, assumes local timezone
console.log(boxingDay); // 2023-12-25T14:00:00.000Z - so hours are different in UTC
const remembranceDay = new Date(2023, 10, 11, 11, 11); // month 10 is November, assumes local timezone
console.log(remembranceDay); // 2023-11-11T01:11:00.000Z - so hours are different in UTC

console.log(`
========================

========================
`);

console.log(`
========================
Displaying Dates
========================
`);

const christmas = new Date("2023-12-25"); // assumes UTC timezone if time not included
console.log(christmas.toLocaleDateString()); // 25/12/2023 - dd/mm/yyyy if in Australia/NZ
console.log(christmas.toLocaleString("ko-KR", { timeZone: "Asia/Seoul" }));
// 2023. 12. 25. 오전 9:00:00 - both timezone and language are converted to Korean
const nyeLocal = new Date("2023-12-31 23:59:59"); // assumes local timezone if time is included
console.log(nyeLocal.toLocaleString()); // 31/12/2023, 11:59:59 pm - default to local TZ
