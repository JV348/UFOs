// Import the data from data.js; declare variable 
const tableData = data;

// Reference the HTML table using d3; tell JS what type of element the data will be displayed in 
var tbody = d3.select("tbody");

// // Create a table with the data; clear previous table data
function buildTable(data) {
    tbody.html("");
    
    // Add forEach to the table; forEach function that loops through our data array, and then adds rows of data to the table
    data.forEach((dataRow) => {
        // Append a row to the table body 
        let row = tbody.append("tr");
        // Loop through each field in the data and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append["td"]
            cell.text(val);
        });
    });
}