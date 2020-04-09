//Global Variables
var hoursArray = ['6am','7am','8am','9am','10am','11am','12pm',
  '1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var simCPHArray = [];
var total = 0;

//Object literal for each location
//CPH = Customer Per Hour
//CPC  = Cookie Per Customer

//dynamically add/store each loop: rdmCPH = random CPH;
//hourCPC = hourly (sim based on random); locationTotal = sum (sim cookies over hours)

var seattle = {
  name: 'Seattle',
  minCPH: 23,
  maxCPH: 65,
  avgCPC: 6.3,

  //generate random number of CPH
  //Objects/Math/random (inclusive)
  randomCPH: function(){
    var rdmNumber = Math.floor(Math.random() * (this.maxCPH - this.minCPH + 1)) + this.minCPH;
    console.log('random' + rdmNumber);
    return rdmNumber;
  },
};

//calculate sim cookies per each hour using avgCPC and randomCPH
//store in simCPHArray = simulated cookies per hour
function simulateCPH(){
  return simCPHArray[i]= seattle.randomCPH() * seattle.avgCPC;
}

for (var i = 0; i < hoursArray.length; i ++){
  simulateCPH();
  simCPHArray.push();
  console.log (' sim[i]' + simCPHArray[i]);
}

//calculate total cookies for the day
function totalCookies(index){
  total = total + simCPHArray[index];
  return total;
}

for (i = 0; i <= simCPHArray.length; i ++){
  totalCookies(i);
  console.log ('total' + totalCookies());
}



// Display via DOM manipulation

console.log(seattle);
