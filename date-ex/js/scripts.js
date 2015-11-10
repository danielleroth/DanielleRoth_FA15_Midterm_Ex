// REFER TO: 
// text() : http://api.jquery.com/text/
// toDateString() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString
// getFullYear()  : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear


// Construct Date() object for today date & this year

// Use Date() methods. Reasign/store new values.
var date = new Date();
var year = date.getFullYear();

console.log(date.toString());

// Dynamically insert todays date
$('.todays-date').text(date);
// Dynamically insert this year
$('.year').text(year);



