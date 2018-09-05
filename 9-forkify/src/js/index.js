import Search from "./models/Search";


// import Search from "./models/Search";

// Global state of the app
// search object
// Current recipe object
// Shopping list object
// Liked recipes

const state = {}

const search = new Search( 'pizza' );


search.getResults();
console.log( search );

