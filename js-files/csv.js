// CSV

$(document).ready(function(){
  $.ajax({
  url: './data/tariffs.csv',
  dataType: 'text',
  }).done(function(data){
    var mainContainerVar = document.getElementById("csvcontent");

    var allRows = data.split(/\r?\n|\r/);
    // allRows is now an array with all our rows, let's do something each row
    for (var r = 0; r < allRows.length; r++) {
      if (r === 0) {
        // this is the first row with the headers, let's pass this for now but if you want to do something with the header row, here is the place.
      }
      else {
        // This bit will run for each row apart from the header line

        /// Here we are creating an element to contain all the subelements that we will be reading through a row of the data.
        var sectionElement = document.createElement("div");
        // It is always a good idea to set the .classname and also .id
        // In this way, you can do all the cool CSS styling as you will be able to select whereever you want in your structure
        // Here I name the upper layer as "section"
        sectionElement.className = "section";
        sectionElement.id = "section" + r.toString();

        // Here, we do something with elements along a row
        // For that, we are splitting a row into its cells (seperated by commas)
        var cells = allRows[r].split(',');
        console.log(`*************** ${cells}`)
        /// The following will run for each iteration, i.e., for each row of the data
        for (var c = 0; c < cells.length; c++) {
          // Here we are creating a div element for each subsection (i.e., cell)
          var subsectionElement = document.createElement("div");

          // Again some naming here, for selection purposes later by CSS
          // Here I name the inner layer as "subsection"
          subsectionElement.className = "subsection";
          subsectionElement.id = "subsection" + c.toString();
          // Here is the logic part -- what do you want to do with your columns?
          // we can control what we do with each column by checking what the "c" index is
          // So we have a series of conditions here, i.e., if we are in the first column, or the second, etc..
          if (c === 0)
          {
            // For instance, we know the first column here is the URL for the image of the flag, let's make that an <img> tag and add as a new element
            var imageElement = document.createElement("img");
            imageElement.setAttribute('src', cells[c]);
            subsectionElement.append(imageElement);

          }
          else if (c === 1)
          {
            // For instance, we know the second column here is the country name, let's make that a header and add as a new element
            var headerElement = document.createElement("h2");
            headerElement.innerHTML = cells[c];
            subsectionElement.append(headerElement);
          }

          else
          {
            // being a bit lazy here, adding all the other columns after the first two directly as text content to the subsection DIV
            subsectionElement.innerHTML = cells[c];
          }
          // Now that we have populated the subsectionElement with content from the file, let's append it to the sectionElement
          sectionElement.append(subsectionElement);
        }
        // Now that we have populated the sectionElement with several subsectionElement elements (in this case we have "c" many DIVs, i.e., as many as the number of columns), we can add the sectionElement to the mainContainerVar
        // Important: This will run once for each row in your data file (apart from the header row), so you end up with "n - 1" sectionElements (DIV with class attribute "section") (n = number of rows)
        mainContainerVar.append(sectionElement);

      }
    }
  });
});
