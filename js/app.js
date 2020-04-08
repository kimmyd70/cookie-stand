//Object literal for each location
//CPH = Customer Per Hour
//CPC  = Cookie Per Customer

var Seattle ={
  minCPH: 23,
  maxCPH: 65,
  avgCPC: 6.3,
  
//wrapped in for loop w/if for each hour (0-14): 6-11am, 12pm, 1-5pm, 6-7pm
  randomCPH: function(min,max){
    //generate random number of CPH
    //Objects/Math/random (inclusive)
        min = Math.ceil(min);
        max = Math.floor(max);
        location.RCPH = Math.floor(Math.random() * (max - min + 1)) + min; 
      }
  }

  simCPC: function(){
    //calculate sim cookies per each hour
    //using avgCPC and randomCPH
    

    //store value for each hour 6am-7pm
    //add with location.hourCPC: XX

  }
  
  locationTotal: function(){
      //calculate and display total per location
      //loop sum over location.simCPC
      //add with location.locationTotal
    }

  // display hour (am/pm): location.hourCPC 'cookies' \n
  //display (`Total: $(location.locationTotal) cookies`)
  console.log () //test//

  // display as ul in browser (DOM manipulation)

  // hour for loop complete
};