// from data.js
var tableData = data;

var button = d3.select("#filter-btn");
var form = d3.select(".form-group");
var tbody = d3.select("tbody");

button.on("click", runEnter);


function runEnter() {

  d3.event.preventDefault();
  
  var inputElement = d3.select("#datetime");
  var inputDate = inputElement.property("value");

  var inputElement2 = d3.select("#city");
  var inputCity = inputElement2.property("value");

  var inputElement3 = d3.select("#state");
  var inputState = inputElement3.property("value");

  var inputElement4 = d3.select("#country");
  var inputCountry = inputElement4.property("value");

  var inputElement5 = d3.select("#shape");
  var inputShape = inputElement5.property("value");

  var checker = false;

  var filteredData =tableData;

  if (inputDate !== ""){
      filteredData = filteredData.filter(ufo => ufo.datetime === inputDate);
      checker = true;
  };

  tbody.html("");


  if (inputCity !== ""){
      filteredData = filteredData.filter(ufo => ufo.city === inputCity);
      checker = true;
  };

  tbody.html("");


  if (inputState !== ""){
      filteredData = filteredData.filter(ufo => ufo.state === inputState);
      checker = true;
  };

  tbody.html("");


  if (inputCountry !== ""){
      filteredData = filteredData.filter(ufo => ufo.country === inputCountry);
      checker = true;
  };

  tbody.html("");


  if (inputShape !== ""){
      filteredData = filteredData.filter(ufo => ufo.shape === inputShape);
      checker = true;
  };

  tbody.html("");

 
  if (checker = true){
  filteredData.forEach((ufoReport) => {
      var row = tbody.append("tr");
      Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  };
  
};