// 1. What kind of trivia game should it be?
//2.How long should it be?
// 3. THink about how I want this game to function.
// Make timer for 30 seconds somewhere in the middle of my browser


window.onload = function(){
   $("#go").on("click", startclock.begin);
 	$("#timer").text("00");
  
};


//  Get the startclock to run
var intervalId;

//prevents the clock from being sped up unnecessarily
var getSet = false;

// Object startclock
var startclock = {

  countdown: 0,
  finish: 1,

  reset: function() {

   startclock.countdown = 0;
    startclock.finish = 1;

   $("#timer").text("00");

    
  },
	begin: function() {

    if (!getSet) {
        intervalId = setInterval(startclock.count, 1000);
        getSet = true;
    }
  },
  end: function() {

    clearInterval(intervalId);
    getSet = false;
  },
  
  count: function() {

    startclock.countdown++ ;

    var converted = startclock.timeConverter(startclock.countdown);
    console.log(converted);

    $("#timer").text(converted);
  },

  timeConverter: function(d) {

    var getseconds = Math.floor(d / 30);
    var seconds = d - (getseconds * 30);
 
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    
    return  seconds;
  }


  
};


