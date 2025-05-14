// node /Users/samuellove/Documents/GitHub/IOD/Module1.5-PackageManagers/sentiment.js

var Sentiment = require("sentiment");
var sentiment = new Sentiment();
var result = sentiment.analyze("Cats are stupid.");
console.dir(result); // Score: -2, Comparative: -0.666
