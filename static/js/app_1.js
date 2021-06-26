// import the data from data.js
const tableData = data;
//reference the HTML table using d3 -- use d3.select to look for tbody tags in html
var tbody = d3.select("tbody");

function buildTable(data){
    // First, clear out any existing data
    tbody.html("");
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        //variable that will append a row to the table body
        let row = tbody.append("tr");
        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        }
     );
    });
}
//add another function to filter the tables 
function handleClick(){
    //d3.select(#datetime) tells to find the first element to find string matched
    let date = d3.select("#datetime").property("value");
    //set a default filter and save it to a new variable
    let filteredData = tableData;
    //if statement if condition meets, filter, otherwise, return to default filter
    //Check to see if a date was entered and filter the data using that date.
    if (date) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
      };
      // Rebuild the table using the filtered data
      // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
    buildTable(filteredData);
}
    //selector string and tells d3 to run handleClick function when filter-btn is clicked
    // Attach an event to listen for the form button

d3.selectAll("#filter-btn").on("click", handleClick);
// Build the table when the page loads
buildTable(tableData);

