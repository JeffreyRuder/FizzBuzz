$(document).ready(function() {
    var numberToPingPong = new Array(100);
    $.each(numberToPingPong, function (item) {
        if ((item + 1) % 15 === 0) {
            $('body').append('<p> ' + (item + 1) + '. PingPong </p>');
        }
        else if ((item + 1) % 5 === 0) {
            $('body').append('<p> ' + (item + 1) + '. Pong </p>');
        }
        else if ((item + 1) % 3 === 0) {
            $('body').append('<p> ' + (item + 1) + '. Ping </p>');
        }
        else {
            $('body').append('<p> ' + (item + 1) + '.</p>');
        }
    });
});