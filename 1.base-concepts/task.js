"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let x1;
  let x2;
  let d = Math.pow(b, 2) - 4*a*c;

  if (d == 0) {
    x1 = -b/(2*a);
    arr = [x1];
  }

  if (d > 0) {
    x1 = (-b + Math.sqrt(d) )/(2*a);
    x2 = (-b - Math.sqrt(d) )/(2*a);
    arr = [x1, x2];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let s = amount - contribution;
  let p = percent*0.01/12;
  let sum  = (s * (p + (p / (Math.pow((1 + p),countMonths) - 1))))*countMonths;
  return Number(sum.toFixed(2));
}