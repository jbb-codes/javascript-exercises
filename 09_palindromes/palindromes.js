const palindromes = function (str) {
  newStr = str.replace(/[\W_]/g, "").toLowerCase();
  temp = newStr.split("").reverse().join("");
  return newStr === temp;
};

// Do not edit below this line
module.exports = palindromes;
