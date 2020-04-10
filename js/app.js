//Global Variable
var hoursArray = ['6am','7am','8am','9am','10am','11am','12pm',
  '1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


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

function storeSimCPH (location){
  for (var i = 0; i < hoursArray.length; i ++){
    location.simCPHArray[i]= location.randomCPH() * location.avgCPC;
    console.log (' sim[i]' + location.simCPHArray[i]);
  }
  return location.simCPHArray;
}

//calculate total cookies for the day

function totalCookies (location){
  for (var i = 0; i < hoursArray.length; i ++){
    location.total = Math.round (location.total + location.simCPHArray[i]);
  }
  return location.total;
}

/////////////// Output: Do all functions for each of the values in locationArray

function allLocations (anyArray){
  for (var i = 0; i < anyArray.length; i ++ ){
    storeSimCPH (anyArray[i]);
    //storeSimCPH (seattle);
    //totalCookies (seattle);
    totalCookies(anyArray[i]);

    console.log ('total' + anyArray[i].total);
    console.log('location' + anyArray[i].name);
    console.log ('sim' + anyArray[i].simCPHArray);

    //console.log ('total' + seattle.total);
    //console.log('location' + seattle.name);
    //console.log ('sim' + seattle.simCPHArray);

    ///////////////Display each via DOM manipulation///////////

  }
}
//Global
var locationArray = [seattle,tokyo,dubai,paris,lima];

// Do The Thing

allLocations(locationArray);

////////////////////////////
