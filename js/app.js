//Object literal for each location
//CPH = Customer Per Hour
//CPC  = Cookie Per Customer

var Seattle ={
  minCPH: 23,
  maxCPH: 65,
  avgCPC: 6.3,
  

  randomCPH: function(){
    //generate random number of CPH
    //Objects/Math/random
    return (this.randomCPH);
  }

  simCPC: function(){
    //calculate sim cookies per each hour
    //using avgCPC and randomCPH
    //2 loops--one for am, one for pm

    //store value for each hour 6am-7pm
    //location.hour: XX

  }
  
  locationTotal: function(){
      //calculate and display total per location
      //loop sum over location.simCPC
    }

  // display location.hour (am/pm): simCPC 'cookies' \n
  console.log () //test//

  // display as ul in browser (DOM manipulation)
};