/* //Lab 07
X-build objects with constructors

-calculate daily total for each location and show at location row end

format output data into a table
    - each location uses a separate method (rename: render)
    - header and footer created in stand-alone (prototype) functions
    - put in CSS proper spacing and gridlines (css reset wipes them out)
 */

/////////////////////////////////////////////


/*var seattle = {
  name: 'Seattle',
  minCPH: 23,
  maxCPH: 65,
  avgCPC: 6.3,
  simCPHArray: [],
  total: 0,

  //generate random number of CPH
  //Objects/Math/random (inclusive)
  randomCPH: function(){
    var rdmNumber = Math.floor(Math.random() * (this.maxCPH - this.minCPH + 1)) + this.minCPH;
    console.log('random' + rdmNumber);
    return rdmNumber;
  },
};

var tokyo = {
  name: 'Tokyo',
  minCPH: 3,
  maxCPH: 24,
  avgCPC: 1.2,
  simCPHArray: [],
  total: 0,
  
  //generate random number of CPH
  //Objects/Math/random (inclusive)
  randomCPH: function(){
    var rdmNumber = Math.floor(Math.random() * (this.maxCPH - this.minCPH + 1)) + this.minCPH;
    console.log('random' + rdmNumber);
    return rdmNumber;
  },
};

var dubai = {
  name: 'Dubai',
  minCPH: 11,
  maxCPH: 38,
  avgCPC: 3.7,
  simCPHArray: [],
  total: 0,

  //generate random number of CPH
  //Objects/Math/random (inclusive)
  randomCPH: function(){
    var rdmNumber = Math.floor(Math.random() * (this.maxCPH - this.minCPH + 1)) + this.minCPH;
    console.log('random' + rdmNumber);
    return rdmNumber;
  },
};

var paris = {
  name: 'Paris',
  minCPH: 20,
  maxCPH: 38,
  avgCPC: 2.3,
  simCPHArray: [],
  total: 0,

  //generate random number of CPH
  //Objects/Math/random (inclusive)
  randomCPH: function(){
    var rdmNumber = Math.floor(Math.random() * (this.maxCPH - this.minCPH + 1)) + this.minCPH;
    console.log('random' + rdmNumber);
    return rdmNumber;
  },
};

var lima = {
  name: 'Lima',
  minCPH: 2,
  maxCPH: 16,
  avgCPC: 4.6,
  simCPHArray: [],
  total: 0,


};
*/

//////////////////////////////////////////////

//Global Variables
var parentEl = document.getElementById('salesData2');
var hoursArray = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm',
  '1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
var locationArray = [];
var hourTotalArray = [];

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
    //console.log('random' + rdmNumber);
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
    parentEl.appendChild (rowEl);
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
    console.log (' sim[i]' + this.simCPHArray[i]);
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
  //console.log ('hr totals' + hourTotalArray);
  return this.hourTotalArray;
}

///////////////Display each via DOM manipulation///////////


///Header render; create row, cells, fill, append
function headerRender () {
//create row element for the location and append
  var rowEl = document.createElement('tr');
  //append total cell to beginning
  var spEl = document.createElement('td');
  //spEl.textContent = '';
  //spEl.textContent = 'BLANK';
  rowEl.appendChild(spEl);

  //create and fill one row length 14
  for (var i = 0; i < hoursArray.length; i ++ ){
    var cellEl = document.createElement('td');
    cellEl.textContent = `${hoursArray[i]}`;
    rowEl.appendChild (cellEl);
  }
  // add total to end of row
  var locTotalel = document.createElement('td');
  locTotalel.textContent = 'Daily Location Total';
  rowEl.appendChild(locTotalel);
  //append row to the table
  parentEl.appendChild (rowEl);
}

///Footer render
function footerRender() {
  //create row element for the location and append
  var rowEl = document.createElement('tr');
  //append empty cell to beginning
  var spaceEl = document.createElement('td');
  //spaceEl.textContent = '';
  spaceEl.textContent = 'Totals';
  rowEl.appendChild(spaceEl);

  //create and fill cells one row length 14
  for (var i = 0; i < hoursArray.length; i ++ ){
    var hrTotalEl = document.createElement('td');
    //hrTotalEl.textContent = 'help';
    hrTotalEl.textContent = `${hourTotalArray[i]}`;
    rowEl.appendChild (hrTotalEl);
  }

  //append blank to end of row
  var locTotalel = document.createElement('td');
  locTotalel.textContent = '';
  rowEl.appendChild(locTotalel);

  //append row to the table
  parentEl.appendChild (rowEl);
}

// Do The Thing
/////////////// Output: Do all functions for each of the values in locationArray

//output header row
headerRender();

for (var i = 0; i < locationArray.length; i ++ ){
  locationArray[i].simulateCPH ();
  locationArray[i].totalCookies();
  locationArray[i].render();
}
simHourTotal(locationArray);
footerRender();
////////////////////////////
