// from data.js
var tableData = data;
var index = 1
// YOUR CODE HERE!
data.forEach(element=>{
    // Find a <table> element with id="ufo-table":
    var table = document.getElementById("ufo-table");
    var row = table.insertRow(index);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);

    // Add some text to the new cells:
    cell1.innerHTML = element.datetime;
    cell2.innerHTML = element.city;
    cell3.innerHTML = element.state;
    cell4.innerHTML = element.country;
    cell5.innerHTML = element.shape;
    cell6.innerHTML = element.durationMinutes;
    cell7.innerHTML = element.comments;

    index++;


});

// Find a <table> element with id="ufo-table":
var table = document.getElementById("ufo-table");
var row = table.insertRow(0);