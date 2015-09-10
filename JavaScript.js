var numToPingPong = prompt("To which number do you wish to ping-pong? Please select a positive non-zero integer.");

for (ii = 1; ii <= numToPingPong; ii++) {
    var output = ""
    if((ii % 3 === 0) && (ii % 5 === 0)) {
        output = "Ping-Pong";
    }
    else if(ii % 3 === 0) {
        output = "Ping";
    }
    else if(ii % 5 === 0) {
        output = "Pong";
    }
    else {
        output = ii;
    }
    
    //Assumes that the document has a #pingPongList element.
    document.getElementById('pingPongList').innerHTML += '<li>' + output + '</li>';
}
