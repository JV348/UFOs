// Import the data from data.js; declare variable 
const tableData = data;

// Reference the HTML table using d3; tell JS what type of element the data will be displayed in 
var tbody = d3.select("tbody");

// // Create a table with the data; clear previous table data
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
    
    // Add forEach to the table; forEach function that loops through our data array, and then adds rows of data to the table
    data.forEach((dataRow) => {
        // Append a row to the table body 
        let row = tbody.append("tr");
        // Loop through each field in the data and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append["td"]
            cell.text(val);
            }
        );
    });
}

// // Second function that will focus on filtering the table 
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  }
  
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);