// from data.js
var tableData = data;
var button = d3.select("#filter-btn");
var form = d3.select("#form");
button.on("click", runEnter);
form.on("submit",runEnter);
var tbody = d3.select("tbody");


// YOUR CODE HERE!
// Get a reference to the table body
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
  
    var filteredData = tableData.filter(info => info.datetime === inputValue);
    
    filteredData.forEach(function(print) {
        console.log(print);
        var row = tbody.append("tr");
        Object.entries(print).forEach(function([key, value]) {
          console.log(key, value);
          // Append a cell to the row for each value
          // in the weather report object
          var cell = row.append("td");
          cell.text(value);
        });
      });

};