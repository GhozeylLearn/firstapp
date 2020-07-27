const and = require('./and');
let result = and([1, 0, 0, 1], [1, 1, 1, 0]);
console.log(result);
//or 
const or = require('./or');
let resultOr = or([1, 0, 0, 1], [1, 1, 1, 0]);
console.log(resultOr);

//not 
const not = require('./not');
let resultNot = not([1, 0, 0, 1]);
console.log(resultNot);
