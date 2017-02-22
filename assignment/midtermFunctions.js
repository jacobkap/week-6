/* ================================
Week 6 Assignment: Midterm Functions + Signatures
================================ */
//Returns a string with the date in a format
// acceptable for the crime data. Input is
// format for weather data
crimeDateMaker = function(dateString) {};

// Gets crime for given date and crime
// Crime is jquery for crime selector on webpage
// Returns array of objects with one objects
// per crime
getCrimeData = function(date, crime){};

// Gets weather data for given date. Returns array
// of objects with hourly weather data
getWeatherDate = function(date){};

// Counts how many crimes were during rain
// Input is crimes array, output is numeric
countRainyCrime = function(crimes){};

// Counts how many crimes were during dry days
// Input is crimes array, output is numeric
countDryCrime = function(crimes){};


// Check if raining for each crime
// Each crime has a time, this will check if
// it was raining during then.
rainingCheck = function(crimeObject){};

// leaflet map
// map only in shapefile


// click event - popup
// mouseover event - popup
// One image for during rain, one for not rain

// For midterm
/*
var SFdata;
$.ajax({
    url: "https://data.sfgov.org/resource/cuks-n6tp.json?date=2017-01-02&category=LARCENY/THEFT",
    type: "GET",
    data: {
      "$$app_token" : "FkhniUz4GAe7dUjqw2mjFaCV4"
    }
}).done(function(data) {
   SFdata = data;
});


var SFweather;
$.ajax({
    url: "https://api.wunderground.com/api/2cb7bda861b3def1/history_20170102/q/CA/San_Francisco.json",
    type: "GET"
}).done(function(data) {
   SFweather = data.history.observations;
});
*/
