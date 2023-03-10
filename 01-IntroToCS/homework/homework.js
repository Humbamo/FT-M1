"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum += +num[i] * 2 ** (num.length - 1 - i);
  }
  return sum;
}

function DecimalABinario(num) {
  // tu codigo aca
  return parseInt(num, 10).toString(2);
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
