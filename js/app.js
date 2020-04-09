//Global Variables
hours: ['6am','7am','8am','9am','10am','11am','12pm',
  '1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


//Object literal for each location
//CPH = Customer Per Hour
//CPC  = Cookie Per Customer

//dynamically add/store each loop: rdmCPH = random CPH;
//hourCPC = hourly (sim based on random); locationTotal = sum (sim cookies over hours)

var Seattle = {
  name: 'Seattle',
  minCPH: 23,
  maxCPH: 65,
  avgCPC: 6.3,
  simCPH: [],

  //generate random number of CPH
  //Objects/Math/random (inclusive)
  randomCPH: function(){
    var rdmNumber = Math.floor(Math.random() * (this.maxCPH - this.minCPH + 1)) + this.minCPH;
    return rdmNumber;
  },

  simulateCPH: function(){
    //calculate sim cookies per each hour
    //using avgCPC and randomCPH
    //store value for each hour 6am-7pm
    //add with location.hourCPC: XX
  },

  locationTotal: function(){
    //calculate
    //update with sum (location.simCPC, previous)
    //add with location.locationTotal
    //display sales.html
  },

};

// wrapped in for loop location.hours.length for display

console.log(Seattle.randomCPH());
