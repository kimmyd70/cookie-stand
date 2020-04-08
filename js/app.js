//Object literal for each location
//CPH = Customer Per Hour
//CPC  = Cookie Per Customer

//dynamically add/store each loop: rdmCPH = random CPH;
//hourCPC = hourly (sim based on random); locationTotal = sum (sim cookies over hours)

var seattle = {
    minCPH: 23,
    maxCPH: 65,
    avgCPC: 6.3,
  
// wrapped in for loop w/if for each hour (0-14): 6-11am, 12pm, 1-5pm, 6-7pm
  
  //generate random number of CPH
  //Objects/Math/random (inclusive)
  randomCPH: function(){  
    min = Math.ceil(this.minCPH),
    max = Math.floor(this.maxCPH),
    seattle.rdmCPH = Math.floor(Math.random() * (max - min + 1)) + min,
  }

  setMaxMinCPH: function(){
    //IF to store CPH as location.minCPH or location.maxCPH as appropriate
    console.log (seattle.rdmCPH)
  }

  simCPC: function(){
    //calculate sim cookies per each hour
    //using avgCPC and randomCPH
    

    //store value for each hour 6am-7pm
    //add with location.hourCPC: XX

  }
  
  locationTotal: function(){
      //calculate
      //update with sum (location.simCPC, previous)
      //add with location.locationTotal
      //display sales.html
    }

  // for loop w/hours complete
};
