/* ================================
Week 6 Assignment: Slide Model
================================ */

/** Here's a simple 'model' of a slide.
 *  It tracks the slide's index and the title we want in our HTML
 */

 // Show blank map of SF
 var slideExample = {
   slideNumber: 1,
   title: "San Francisco Crime When It Rain"
   text: "California has recently had a number of rainstorms. During rain, crime " +
   "decreases, especially outdoor crime. We will look at theft on Pier 39 - a touristy " +
   "landmark in San Francisco - during rainy and dry days."
 }

// Show all theft in SF during time period
// Rainy days with one icon, dry days with other
// icon
var slideExample = {
  slideNumber: 2,
  title: "Thefts in San Francisco"
  text: "Thefts is one of the most common crimes in San Francisco. " +
  "From January 1st to Valentine's Day, there have been " + crime.length +
  " thefts in SF."
};

// Same as above but zoomed into Pier 39 and showing
// only crimes in Pier 39 shapefile
var slideExample = {
  slideNumber: 3,
  title: "Thefts in Pier 39"
  text: "Pier 39 is a very popular tourist trap in San Francisco. " +
  "It has had " + countDryCrime() + " thefts between January 1st and Valentine's Day"
};

// Show only dry day crimes
var slideExample = {
  slideNumber: 4,
  title: "Thefts in Pier 39"
  text: "That's, on average, " + countDryCrime() / crime.length + " thefts per day."
};


// Show only rainy day crimes
var slideExample = {
  slideNumber: 5,
  title: "Thefts in Pier 39"
  text: "That's, on average, " + countRainyCrime() / crime.length + " thefts per day."
};
