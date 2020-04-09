//Global Variables
var hoursArray = ['6am','7am','8am','9am','10am','11am','12pm',
  '1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
//var simCPHArray = [];
//var total = 0;
var locationArray = ['seattle','tokyo','dubai','paris','lima'];

//Object literal for each location
//CPH = Customer Per Hour
//CPC  = Cookie Per Customer

var seattle = {
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

  //generate random number of CPH
  //Objects/Math/random (inclusive)
  randomCPH: function(){
    var rdmNumber = Math.floor(Math.random() * (this.maxCPH - this.minCPH + 1)) + this.minCPH;
    console.log('random' + rdmNumber);
    return rdmNumber;
  },
};


// calculate sim cookies per each hour using avgCPC and randomCPH
// store in location.simCPHArray = simulated cookies per hour
// return location.simCPHArray[i]= location.randomCPH() * location.avgCPC;

function storeSimCPH (location){
  for (var i = 0; i < hoursArray.length; i ++){
    //simulateCPH();
    location.simCPHArray[i]= location.randomCPH() * location.avgCPC;
    location.simCPHArray.push();
  }
  console.log (' sim[i]' + location.simCPHArray[i]);
  return location.simCPHArray;
}

//calculate total cookies for the day

function totalCookies (location){
  for (var i = 0; i < location.simCPHArray.length; i ++){
    location.total = Math.round (total + location.simCPHArray [i]);
    return location.total;
  }
}

//
// Output: Do all functions for each of the values in locationArray; Display each via DOM manipulation
//

for (var i = 0; i < locationArray.length; i ++ ){
  storeSimCPH (locationArray[i]);
  totalCookies (locationArray[i]);

  console.log ('total' + location.total);
  console.log('location' + location.name);
  console.log ('sim' + location.simCPHArray);
}

