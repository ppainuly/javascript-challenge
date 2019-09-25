// from data.js
//originalData = data
// YOUR CODE HERE!

//window.onload = () => buildPage(tableData);
d3.select(window).on("load", buildPage(data));

buttonFilter = d3.select("#filter-btn");

buttonFilter.on("click", function(){

    let filterArray = [];
    let tableData = data;
    let date = d3.select("#datetime");
    let city = d3.select("#city");
    let state = d3.select("#state");
    let country = d3.select("#country");
    let shape = d3.select("#shape");
    if(date.property("value").length > 0){
        filterArray.push(s => date.property("value") === s.datetime);
    }
    if(city.property("value").length > 0){
        filterArray.push(s => city.property("value") === s.city);
    }
    if(state.property("value").length > 0){
        filterArray.push(s => state.property("value") === s.state);
    }
    if(country.property("value").length > 0){
        filterArray.push(s => country.property("value") === s.country);
    }
    if(shape.property("value").length > 0){
        filterArray.push(s => shape.property("value") === s.shape);
    }
    filterArray.forEach(f => tableData = tableData.filter(f));

    //If filters have any data then show the updated table
    if(filterArray.length > 0){

        console.log(tableData);
        buildPage(tableData);
    // Else if filter is clicked whout values, show entire page will all values
    }else{
        buildPage(data);
    }
});

function buildPage(input){
    document.getElementById("ufo-table").getElementsByTagName('tbody')[0].innerHTML = "";
    input.forEach((element,index)=>{
        // Find a <table> element with id="ufo-table":
        let table = document.getElementById("ufo-table").getElementsByTagName('tbody')[0];
        let row = table.insertRow(index);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        let cell7 = row.insertCell(6);

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
