const integers = [23, 15, 6, 3, 11, 20, 18, 7, 21, 1, 29, 10, 12, 8];

// integers.sort(function(a, b){return b-a});
// integers.remove(function(a){a<19});
// integers.map(function(a){return a*1.5-1});
// integers.reduce(function(a){return a}); 

var integerResults = integers.filter(int => int < 19).sort((a,b) => b-a).map(a => a*1.5-1).reduce((a,b) => a+b);

document.getElementById("chain").innerHTML = integerResults