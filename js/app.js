//Global Variables
var hoursArray = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm',
  '1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
var locationArray = [];
var hourTotalArray = [];

var addLocation = document.getElementById ('addLocation'); //reference the form
var last = (locationArray.length - 1); //for footer delete with event

var table = document.getElementById('salesData2'); //reference the table

//Object literal replaced with constructor
//CPH = Customer Per Hour
//CPC  = Cookie Per Customer

function CookieStore (name, minCPH, maxCPH, avgCPC, simCPHArray= [], dailyTotal = 0){
  this.name = name;
  this.minCPH = minCPH;
  this.maxCPH = maxCPH;
  this.avgCPC = avgCPC;
  this.simCPHArray = simCPHArray;
  this.dailyTotal = dailyTotal;

  locationArray.push(this);

  //generate random number of CPH
  //Objects/Math/random (inclusive)

  this.randomCPH = function(){
    var rdmNumber = Math.floor(Math.random() * (this.maxCPH - this.minCPH + 1)) + this.minCPH;
    return rdmNumber;
  };

  this.render = function(){
    //create row element for the location and append
    var rowEl = document.createElement('tr');

    //create and fill title cell; append to row
    var titleEl = document.createElement('td');
    titleEl.textContent = `${this.name}`;
    rowEl.appendChild (titleEl);

    //create and fill cells for each row length of 14 = #hours and append
    for (var i = 0; i < hoursArray.length; i ++ ){
      var cellEl = document.createElement('td');
      cellEl.textContent = `${this.simCPHArray[i]}`;
      rowEl.appendChild (cellEl);
    }

    //create and fill total at the end of row; append to row
    var totalEl = document.createElement('td');
    totalEl.textContent = `${this.dailyTotal}`;
    rowEl.appendChild (totalEl);

    //append row to the table
    table.appendChild (rowEl);
  };
}

//instantiate the objects

new CookieStore('Seattle', 23, 65, 6.3);
new CookieStore('Tokyo', 3, 24, 1.2);
new CookieStore('Dubai', 11, 38, 3.7);
new CookieStore('Paris', 20, 38, 2.3);
new CookieStore('Lima', 2, 16, 4.6);

// calculate sim cookies per each hour using avgCPC and randomCPH
// store in location.simCPHArray = simulated cookies per hour
CookieStore.prototype.simulateCPH = function(){
  for (var i = 0; i < hoursArray.length; i ++){
    this.simCPHArray[i]= Math.round(this.randomCPH() * this.avgCPC);
  }
  return this.simCPHArray;
};

//calculate total cookies for the day per store
CookieStore.prototype.totalCookies = function (){
  for (var i = 0; i < hoursArray.length; i ++){
    this.dailyTotal = this.dailyTotal + this.simCPHArray[i];
  }
  return this.dailyTotal;
};

//calculates total cookies per hour from all stores
//over one hour [j], loop to add from each this.simCPHArray
function simHourTotal(locationArray){
  var hourTotal = 0;
  for (var j = 0; j < hoursArray.length; j++){
    for (var i = 0; i < locationArray.length; i ++){
      hourTotal = locationArray[i].simCPHArray[j] + hourTotal;
      hourTotalArray[j] = hourTotal;
    }
    hourTotal = 0;
  }
  return this.hourTotalArray;
}

///Header render; create row, cells, fill, append
function headerRender () {
  //create row element for the location and append
  var tableHeader = document.createElement('tr');
  //append total cell to beginning
  var spEl = document.createElement('th');
  //spEl.textContent = '';
  //spEl.textContent = 'BLANK';
  tableHeader.appendChild(spEl);

  //create and fill one row length 14
  for (var i = 0; i < hoursArray.length; i ++ ){
    var cellEl = document.createElement('th');
    cellEl.textContent = `${hoursArray[i]}`;
    tableHeader.appendChild (cellEl);
  }
  // add total to end of row
  var locTotalel = document.createElement('th');
  locTotalel.textContent = 'Daily Location Total';
  tableHeader.appendChild(locTotalel);
  //append row to the table
  table.appendChild (tableHeader);
}

///Footer render
function footerRender() {
  //create row element for the location and append
  var tableFooter = document.createElement('tr');
  //append empty cell to beginning
  var spaceEl = document.createElement('td');
  //spaceEl.textContent = '';
  spaceEl.textContent = 'Totals';
  tableFooter.appendChild(spaceEl);

  //create and fill cells one row length 14
  for (var i = 0; i < hoursArray.length; i ++ ){
    var hrTotalEl = document.createElement('td');
    //hrTotalEl.textContent = 'help';
    hrTotalEl.textContent = `${hourTotalArray[i]}`;
    tableFooter.appendChild (hrTotalEl);
  }
  //append grand total to end of row
  var grandTotalel = document.createElement('td');
  var grandTotalSum = 0;
  grandTotalel.textContent = '';
  for (var g = 0; g < hoursArray.length; g++){
    grandTotalSum += hourTotalArray[g];
  }
  grandTotalel.textContent = parseInt(grandTotalSum);
  tableFooter.appendChild(grandTotalel);
  table.appendChild (tableFooter);
}

function handleAdd (event){
  //prevent auto page reload//
  event.preventDefault();
  var newName = event.target.newName.value;
  var newMinCH = event.target.newMinCH.value;
  var newMaxCH = event.target.newMaxCH.value;
  var newAvgCPC = event.target.newAvgCPC.value;

  new CookieStore(newName,newMinCH,newMaxCH,newAvgCPC);

  //calculate for new stores//
  locationArray[i].simulateCPH ();
  locationArray[i].totalCookies();

  //render new info on screen
  newRender();

  //clear out console//
  event.target.newName.value = null;
  event.target.newMinCH.value = null;
  event.target.newMaxCH.value = null;
  event.target.newAvgCPC.value = null;
}

//re-render after handler event
function newRender(){
  //delete old footer
  table.deleteRow(last);

  //insert row
  // Create an empty row and add it to the last position of the table:
  var rowEl = table.insertRow(i);
  table.appendChild(rowEl);

  //fill row with new store data
  locationArray[i].render();

  //calculate hrly totals
  simHourTotal(locationArray);

  //render updated footer
  footerRender();

  i++;
}
//////// Do The Thing

//output header row
headerRender();

for (var i = 0; i < locationArray.length; i ++ ){
  locationArray[i].simulateCPH ();
  locationArray[i].totalCookies();
  locationArray[i].render();
}
simHourTotal(locationArray);
footerRender();

//Add a new location with event
addLocation.addEventListener('submit',handleAdd);

/////////////////////////////
