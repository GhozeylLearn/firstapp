const and = require('./and');
let result = and([1, 0, 0, 1], [1, 1, 1, 0]);
console.log(result);
//or 
const or = require('./or');
let resultOr = or([1, 0, 0, 1], [1, 1, 1, 0]);
console.log(resultOr);
