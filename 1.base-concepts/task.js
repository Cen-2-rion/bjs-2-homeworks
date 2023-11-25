"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  
if (d === 0) {
  arr.push(-b / (2 * a));
}
else if (d > 0) {
  arr.push((-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a));
}
return arr;
}
  
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let rateRange = percent / 100 / 12;
  let payment = (amount - contribution) * (rateRange + (rateRange / (Math.pow((1 + rateRange), countMonths) - 1))) * countMonths;
return +payment.toFixed(2);
}
