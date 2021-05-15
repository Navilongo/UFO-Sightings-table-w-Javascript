// from data.js
var tableData = data;

//Append UFO data to table
var tbody = d3.select('tbody')


// Append data into table rows
tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select('#filter-btn');

var form = d3.select("#form");
button.on("click", runDate);
form.on("submit", runDate);