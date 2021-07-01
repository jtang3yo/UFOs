# UFOs

## Overview 
  Dana’s webpage and dynamic table are working as intended, but she’d like to provide a more in-depth analysis of UFO sightings by allowing users to filter for multiple criteria at the same time. In addition to the date, you’ll add table filters for the city, state, country, and shape. Besides the filter on datetime of each UFO sighting events, add filters on multiple criteria, including city, state, country and shape of UFOs. 
Create a basic HTML web page or use the index.html file provided (we recommend building your own custom page!).
  Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
  Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.

## Analysis
  1. Create an empty filters variable to keep track of all the elements that change when a search is entered.
  let filtered = {};
  2. Create updateFilters() function to update filters; 
  3. Use d3.select(this) to select the filter and save it to changedElement variable, save the value in elementValue with .property("value"), and save the id of filter that was changed as filteredID variable with identify id attribute .attr("id"); 
  4. Updated filters in index.html; 
  Using multiple input tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

    i. date/time
    ii. city
    iii. state
    iv. country
    v. shape
  updatedfilters.png![updatedfilters](https://user-images.githubusercontent.com/82353749/124132205-93636100-da4e-11eb-9bf7-83d8e4beea33.png)
  5. If statement applied on if a filter value was entered then add that filterId and value to the filters list. Otherwise, clear that filter from the filters object. 
  if statement.png![if statement](https://user-images.githubusercontent.com/82353749/124131317-ac1f4700-da4d-11eb-88a3-7f05454636b0.png)
  6. Create another filterTable()function to filter the table when data is entered. 
  7. Loop through all of the filters and keep any data that matches the filter values
  filtertable.png![filtertable](https://user-images.githubusercontent.com/82353749/124131569-f1437900-da4d-11eb-9d45-fdca555259ac.png)
  8. Rebuild the table using filtered data: buildTable(filteredData);
  9. Attach an event to listen for the changes to each filter: d3.selectAll("input").on("change", updateFilters); 
  10. Finally, build the table when the page loads: buildTable(tableData), tableData is loaded from external data.js that contain all UFO sighting information. 
  
## Summary 
UFO sightings
ufo sighting<img width="1440" alt="ufo sighting" src="https://user-images.githubusercontent.com/82353749/124158815-62902580-da68-11eb-8ee8-6782173e30de.png">
filter example<img width="1440" alt="filter example" src="https://user-images.githubusercontent.com/82353749/124158836-691e9d00-da68-11eb-979d-67aba1c3fedd.png">

  1. Drawback: Filters on date, city, state, country and shapes are limited to the original dataset imported in terms of descriptions of each sighting incident.  
  2. Recommendations: 
      * The dataset could be more complete if API call could be made to import open source of UFO sighting database; 
      * Filters could be modified to render more detailed search results, such as UFO moving speed, movement patterns,and other factual findings which are available. 

