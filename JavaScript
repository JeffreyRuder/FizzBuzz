var numToPingPong = prompt("To which number do you wish to ping-pong? Please select a positive non-zero integer.");

for (ii = 1; ii <= numToPingPong; ii++) {
    if((ii % 3 === 0) && (ii % 5 === 0)) {
        document.write("Ping-Pong");
        document.write("<br>");
    }
    else if(ii % 3 === 0) {
        document.write("Ping");
        document.write("<br>");
    }
    else if(ii % 5 === 0) {
        document.write("Pong");
        document.write("<br>");
    }
    else {
        document.write(ii);
        document.write("<br>");
    }
}
