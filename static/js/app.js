window.onload = () => {
  //create table
  var table = document.getElementById("table");
  //ajax fetch
  //url = "https://docs.google.com/spreadsheets/d/1_XhUJwKzZBpK2mGIMkMGnmthYSV3hkMmXd44N_XqHyQ/export?format=csv&gid=0"; 
  file = "static/js/BoardGames.csv"
  fetch(file)
  .then(res => res.text())
  .then(csv => {
      //clear table
      table.innerHTMl = "";
      //split into rows
      let rows = csv.split("\r\n");
      //loop through and split into columns
      let first = true;
      for (let row of rows) {
        let cols = row.match(/(?:\"([^\"]*(?:\"\"[^\"]*)*)\")|([^\",]+)/g);
        //add data to table
        if (cols != null) {
          let col_count = 0;
          let tr = table.insertRow();
          for (let col of cols) {
            //add data from first 7 columns
            if (first){//skip header row
            }
            else {
              if (col_count <=6){
                let td = tr.insertCell();
                td.innerHTML = col.replace(/(^"|"$)/g, "");
                col_count++;
              }
              
            }
          }
          }
          first = false;
        }
  });
} ;

