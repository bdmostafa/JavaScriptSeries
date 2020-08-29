/*
toDateString
Converts the date portion of a Date object into a readable string
toGMTString
Deprecated. Use the toUTCString() method instead
toISOString
Returns the date as a string, using the ISO standard
toJSON
Returns the date as a string, formatted as a JSON date
toLocaleDateString
Returns the date portion of a Date object as a string, using locale conventions
toLocaleTimeString
Returns the time portion of a Date object as a string, using locale conventions
toLocaleString
Converts a Date object to a string, using locale conventions
toString
Converts a Date object to a string
toTimeString
Converts the time portion of a Date object to a string
toUTCString()
Converts a Date object to a string, according to universal time
 */

let ts = new Date();
console.log(ts.toDateString());
// Sat Aug 29 2020

console.log(ts.toGMTString());
// Sat, 29 Aug 2020 05:40:20 GMT

console.log(ts.toISOString());
// 2020-08-29T05:40:20.631Z

console.log(ts.toJSON());
// 2020-08-29T05:40:20.631Z

console.log(ts.toLocaleDateString());
// 8/29/2020

console.log(ts.toLocaleTimeString());
// 11:40:20 AM

console.log(ts.toLocaleString());
// 8/29/2020, 11:40:20 AM

console.log(ts.toString());
// Sat Aug 29 2020 11:40:20 GMT+0600 (Bangladesh Standard Time)

console.log(ts.toTimeString());
// 11:40:20 GMT+0600 (Bangladesh Standard Time)

console.log(ts.toUTCString());
// Sat, 29 Aug 2020 05:40:20 GMT