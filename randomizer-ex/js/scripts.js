// REFER TO: 
// Random Number Generator: https://teamtreehouse.com/library/javascript-basics/working-with-numbers/create-a-random-number
// Concatenation: https://teamtreehouse.com/library/javascript-basics/storing-and-tracking-information-with-variables/combining-strings-2
// addClass() : api.jquery.com/addClass/
// text() : api.jquery.com/text/
// eval() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval

// Generate random number between for three images

    var maxRand = 3;                        
    var numRand = Math.floor(Math.random() * maxRand + 1);

console.log(numRand);

// Create & Store 3 different greetings. You choose. 
if (numRand === 1 ) {
    $('h2').text('Aloha!');
    $('body').addClass('bg1');
}
 
if (numRand === 2 ) {
    $('h2').text('Bonjour!');
    $('body').addClass('bg0');
}

if (numRand === 3 ) {
    $('h2').text('Hola!');
    $('body').addClass('bg2');
}


// On Page Load insert random greeting

// NOTE. Wrap/pass the option with eval() method

// use eval() to convert string to variable-object


// On Page Load add random body class to <body> element
// See CSS body class `bg0`, `bg1`, `bg2`

