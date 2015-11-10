// REFER TO: 
// click() : http://api.jquery.com/click/
// addClass() : http://api.jquery.com/addClass/
// removeClass() : http://api.jquery.com/removeClass/




// On click Night Button....

$('.night-btn').click(function() {
    
// Add Night Class
    $('body').addClass('night');
    
// Remove Day Class
    $('body').removeClass('day');

});



// On click Day Button....
$('.day-btn').click(function() {

// Add Day Class
    $('body').addClass('day');

// Remove Night Class
    $('body').removeClass('night');

});

