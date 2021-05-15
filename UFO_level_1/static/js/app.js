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
button.on("click", dateFilter);
form.on("submit", dateFilter);

function dateFilter() {
    // prevent default refresh
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    tbody.html('');

}