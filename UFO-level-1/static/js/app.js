// from data.js
var tableData = data;
//originalData = data
// YOUR CODE HERE!

window.onload = () => buildPage(tableData);

function displayTable(){
    date = document.getElementById("datetime");
    if(date.value.length == 0){
        date.placeholder = "Please enter a date to filter by";
        //date.placeholder.style
    } else{

        dateFilter = data.filter(s=> Date.parse(s.datetime) === Date.parse(date.value));
        console.log(dateFilter);
        buildPage(dateFilter);
    }
}

function buildPage(input){
    //date = document.getElementById("datetime").value;
    //console.log(date)
    //var index = 0;
    document.getElementById("ufo-table").getElementsByTagName('tbody')[0].innerHTML = "";
    input.forEach((element,index)=>{
        // Find a <table> element with id="ufo-table":
        var table = document.getElementById("ufo-table").getElementsByTagName('tbody')[0];


        
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
}


// Find a <table> element with id="ufo-table":
//build(data);