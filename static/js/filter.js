function filterGameName() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("gameName");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

function filterPlayerNumber() {
    // Declare variables
    var input, filter, table, tr, min, max, i, minValue, maxValue;
    input = document.getElementById("playerCount");
    filter = parseInt(input.value);
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      max = tr[i].getElementsByTagName("td")[2];
      min = tr[i].getElementsByTagName("td")[1];
      if (max) {
        maxValue = parseInt(max.innerHTML);
        if (maxValue >= filter){
          if (min) {
            minValue = parseInt(min.innerHTML);
            if (minValue <= filter){
              tr[i].style.display = "";
            }
          }
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }


function filterLength() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("playTime");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[3];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

 function filterComplexity() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("brainPower");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[4];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }